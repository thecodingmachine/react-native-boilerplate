import { httpClient } from '@/services/http-client';

import { UserSchema } from './user.schema';

export const UserApis = {
  fetchOne: async (id: number) => {
    const response = await httpClient.get(`users/${id}`).json();
    return UserSchema.parse(response);
  },
};
