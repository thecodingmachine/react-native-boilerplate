import _ from 'lodash';
import { Alert } from 'react-native';

module.exports = {
  checkForm: (refs) => {
    // let result = true;
    // console.log("!!!!!!!!", refs.length);
    // for (let index = 0; index < refs.length; index++) {
    //   const ref = refs[index];
    //   if (ref && ref.check) {
    //     result = ref.check();
    //     console.log("!!!!!!!!", result);
    //     if (!result) {
    //       if (ref.focus) {
    //         ref.focus();
    //       }
    //       break;
    //     }
    //   }
    // }
    // return result;
    let resultArray = refs.map((ref) => {
      if (ref && ref.check) {
        return ref.check();
      }
      return true;
    });
    resultArray = resultArray.filter(checkValue => checkValue === false);
    return resultArray.length === 0;
  },
  checkRequired: (component) => {
    try {
      if (component !== null) {
        let result = true;
        let invalid = {};
        const childrens = component.props.children;

        const checkPatternIsValid = (str, pattern) => {
          if (pattern) {
            const re = new RegExp(pattern, 'g');
            return re.test(str);
          }
          return true;
        };

        const check = (element) => {
          if (_.isArray(element)) {
            for (const key of Object.keys(element)) {
              const child = element[key];
              const childResult = self.checkRequired(child);
              if (!childResult.status) {
                result = childResult.status;
                invalid = {
                  ...childResult.data,
                  ...invalid,
                };
              }
            }
          } else {
            const childProps = element.props;
            const componentChild = childProps.children;
            const value = childProps.value;
            const pattern = childProps.pattern;
            const key = element.key;
            const name = element.type.name;
            if (componentChild) {
              const childResult = self.checkRequired(element);
              if (!childResult.status) {
                result = childResult.status;
                invalid = {
                  ...childResult.data,
                  ...invalid,
                };
              }
            } else {
              // const isTarget = name === 'InputBox' || name === 'PrimaryInput' || name === 'SubInput';
              // const isRequireAndNoValue = isTarget && childProps.isRequire && value.length === 0;
              const isRequireAndNoValue = childProps.isRequire && (value && value.length === 0);
              const valid = childProps.isRequire || (value && value.length !== 0)
                ? checkPatternIsValid(value, pattern)
                : true;
              if (isRequireAndNoValue || !valid) {
                invalid[key] = true;
                result = false;
              }
            }
          }
        };

        if (_.isObject(childrens)) {
          Alert.alert('1', childrens);
          if (_.isArray(childrens)) {
            Alert.alert('2', childrens);
            for (const key of Object.keys(childrens)) {
              Alert.alert('3', key);
              if (childrens[key]) {
                Alert.alert('5', childrens[key]);
                const element = childrens[key];
                check(element);
              }
            }
          } else {
            Alert.alert('4', childrens);
            check(childrens);
          }
        }
        return { status: result, data: invalid };
      }
      return { status: false, data: {} };
    } catch (error) {
      Alert.alert('error', error.message, error);
    }
  },
};
