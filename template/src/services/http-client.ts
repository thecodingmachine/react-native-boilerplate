import { QueryClient } from '@tanstack/react-query';
import ky from 'ky';

const prefixUrl = `${process.env.API_URL ?? ''}/`;

export const httpClient = ky.extend({
  headers: {
    Accept: 'application/json',
  },
  prefixUrl,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});
