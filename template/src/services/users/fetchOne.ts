import { instance } from '@/services/instance';
import { userSchema } from 'types/entities/user';

export default async (id: number) => {
  const response = await instance.get(`/users/${id}`).json();
  const parsedUser = userSchema.safeParse(response);
  if (parsedUser.success) {
    return Promise.resolve(parsedUser.data);
  }
  return Promise.reject(parsedUser.error);
};
