import { api } from '@/Services/api'
import fetchOne from './fetchOne'

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: fetchOne(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery } = userApi
