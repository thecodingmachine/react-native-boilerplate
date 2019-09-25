/* eslint-disable no-restricted-syntax */
import { Platform, Alert } from 'react-native';
import _ from 'lodash';
import timeoutFetch from 'react-native-fetch-polyfill';
import { Actions } from 'react-native-router-flux';

import config from '../config';
import { api, apiAction as apiActionConfig } from '../config/api';
import Storage from '../config/storage';
import { getItem } from './asyncStorage';
import i18n, { i18nKey } from './i18n';
import { handleLoading } from '../actions/loading';
import { handleAlert } from '../actions/alert';
import { store } from '../index';

const ASYNC_STORAGE_NO_AUTH_TOKEN = 'Async Storage No Auth Token';

const throttleAlert = _.throttle((title, desc) => {
  if (title.length > 0) {
    store.dispatch(
      handleAlert({
        title,
        desc,
        status: 'show',
        type: 'error',
        // service: '',
        // actionSubject: '',
        // actionTime: ''
      }),
    );
  }
}, 1500);

function FileSizeError(message) {
  this.name = 'FileSizeError';
  this.message = message || '';
}
FileSizeError.prototype = Error.prototype;

const serialize = (obj, prefix) => {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? `${prefix}[${p}]` : p;

      const v = obj[p];
      str.push(
        typeof v === 'object'
          ? serialize(v, k)
          : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`,
      );
    }
  }
  return str.join('&');
};

export const apiAction = apiActionConfig;

let apiHandlerQueued = {};
export const apiHandler = async ({
  res,
  done = () => {},
  fail = () => {},
  notify = true,
  errorTitle,
}) => {
  // console.log('apiHandler res=>', res);
  if (res.success === true
    || res.status === 'OK'
    || res.responseStatus === 200
  ) {
    if (notify) {
      if (res.user_title && res.user_msg) {
        throttleAlert(res.user_title, res.user_msg, [
          { text: i18n.t(i18nKey.apiAlertAction), onPress: () => {} },
        ]);
      } else if (res.user_msg) {
        throttleAlert(i18n.t(i18nKey.apiAlertSuccessTitle), res.user_msg, [
          { text: i18n.t(i18nKey.apiAlertAction), onPress: () => {} },
        ]);
      } else if (res.message) {
        // throttleAlert('成功', res.msg);
      }
    }
    if (res.reFetch) {
      res.reFetch = false;
      res.queued = false;
      await apiHandler({
        res,
        ...apiHandlerQueued[res.queueId],
      });
      console.log(`${res.queueId} ReFetch done.`);
      delete apiHandlerQueued[res.queueId];
    } else if (res.queued) {
      apiHandlerQueued = {
        ...apiHandlerQueued,
        [res.queueId]: { done, fail, alert },
      };
    } else {
      await done(res);
    }
  } else if (res.result === ASYNC_STORAGE_NO_AUTH_TOKEN) {
    console.log("can't find auth token in AsyncStorage");
    store.dispatch(handleLoading(false));
    store.dispatch(
      handleAlert({
        title: '請先登入',
        // desc: '',
        status: 'show',
        type: 'error',
      }),
    );
    setTimeout(() => {
      Actions.auth({ type: 'reset' });
    }, 500);
  } else {
    if (res.responseStatus === 400) {
      throttleAlert('錯誤的要求', '請求的資料不存在', [
        { onPress: () => {} },
      ]);
      Actions.pop();
    } else if (res.responseStatus === 401 || res.responseStatus === 403) {
      Actions.systemLogout({
        message: res.error_user_msg || res.msg || res.message,
      });
    } else if (notify) {
      let errorInfo = '';
      if (res.errors && _.isArray(res.errors)) {
        res.errors.forEach((data) => {
          errorInfo += `${data.error_user_msg}\n`;
        });
      }
      if (res.error_user_msg && res.error_user_title) {
        throttleAlert(
          res.error_user_title,
          `${res.error_user_msg}\n${errorInfo}`,
          [{ text: i18n.t(i18nKey.apiAlertAction), onPress: () => {} }],
        );
      } else if (res.error_user_msg) {
        throttleAlert(
          errorTitle || i18n.t(i18nKey.apiAlertTitle),
          `${res.error_user_msg}\n${errorInfo}`,
          [{ text: i18n.t(i18nKey.apiAlertAction), onPress: () => {} }],
        );
      } else if (res && res.message) {
        throttleAlert(
          errorTitle || i18n.t(i18nKey.apiAlertTitle),
          `${res.message}`,
          [{ text: i18n.t(i18nKey.apiAlertAction), onPress: () => {} }],
        );
      } else {
        console.log('res.success is not valid', res);
        throttleAlert(
          errorTitle || i18n.t(i18nKey.apiAlertTitle),
          '請稍後再試',
          [{ text: i18n.t(i18nKey.apiAlertAction), onPress: () => {} }],
        );
      }
    }
    await fail(res);
  }
};

export const fetchAPI = async (
  action,
  data = {},
  params = {},
  options = {},
) => {
  if (!api[action].url) {
    console.log(`action ${action} url is not set`);
  }

  const replace = _.template(api[action].url);
  let url = api[action].url.indexOf('http') === -1
    ? config.domain + replace(params)
    : replace(params);

  const method = api[action].method.toUpperCase();
  const geolocation = api[action].geolocation ? {} : null;
  const body = {
    // appVersion: `${Platform.OS}  ${config.version}`,
    // langCode: i18n.getDeviceLocale(),
    ...data,
    ...api[action].data,
    ...geolocation,
    // type: data.type || 'A',
  };
  const token = await getItem(Storage.AUTHORIZATION);
  const requestOption = {
    method,
    headers: api[action].headers || {
      Accept: 'application/json',
      'Accept-Language': i18n.getDeviceLocale(),
    },
    timeout: parseInt(config.API_REQUEST_TIMEOUT, 10) || 30 * 1000,
    ...options,
  };

  const { auth } = api[action];
  if (auth) {
    if (_.isEmpty(token)) {
      return {
        result: ASYNC_STORAGE_NO_AUTH_TOKEN,
      };
    }
    requestOption.headers.Authorization = `Bearer ${token}`;
  }
  if (!_.isEmpty(body)) {
    if (method === 'GET') {
      url += `?${serialize(body)}`;
    } else if (
      api[action].headers
      && api[action].headers.Accept === 'multipart/form-data'
    ) {
      /* formData */
      const formData = new FormData();
      console.log('body', body);

      for (const name of Object.keys(body)) {
        console.log('key', name);
        // if (name && !_.isEmpty(body[name]) || _.isNumber(body[name])) {
        //   console.log(name, body[name]);
        //   if (_.isArray(body[name])) {
        //     formData.append(name, `[${body[name]}]`);
        //   } else {
        //     formData.append(name, body[name]);
        //   }
        // }
        formData.append(name, body[name]);
      }
      requestOption.body = formData;
    } else {
      /* JSON */
      requestOption.body = JSON.stringify(body);
    }
  }
  let responseJson;
  try {
    console.group('- API request');
    console.log('', url, requestOption);
    const response = await timeoutFetch(url, requestOption);
    responseJson = await response.json();
    console.log('API result: ', responseJson);
    responseJson.responseStatus = response.status;
    console.groupEnd();
    return responseJson;
  } catch (error) {
    console.group('- API request ERROR');
    console.warn('error: ', error);
    console.groupEnd();
    let msg = '';
    switch (error.name) {
      case 'FileSizeError':
        msg = error.message;
        break;
      default:
        msg = '請稍後再試';
        break;
    }
    return {
      result: -1,
      error_code: 87,
      msg,
    };
  }
};
