import type { User } from './schema';

import { useQuery } from '@tanstack/react-query';

import { queryClient } from '@/App';

import { UserServices } from './userService';

const enum UserQueryKey {
  fetchOne = 'fetchOneUser',
}

const useFetchOneQuery = (currentId: User['id']) =>
  useQuery({
    queryKey: [UserQueryKey.fetchOne, currentId],
    queryFn: () => UserServices.fetchOne(currentId),
    enabled: currentId >= 0,
  });

const invalidateFetchOneQuery = queryClient.invalidateQueries({
  queryKey: [UserQueryKey.fetchOne],
});

export const useUser = () => {
  return {
    useFetchOneQuery,
    invalidateFetchOneQuery,
  };
};
