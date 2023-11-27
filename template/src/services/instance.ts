import ky from 'ky';

export const instance = ky.extend({
  prefixUrl: `${process.env.API_URL}/api`,
  headers: {
    Accept: 'application/json',
  },
});
