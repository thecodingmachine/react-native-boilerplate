import type { User } from './schema';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { UserServices } from './userService';

const enum UserQueryKey {
  fetchOne = 'fetchOneUser',
}

const useFetchOneQuery = (currentId: User['id']) =>
  useQuery({
    enabled: currentId >= 0,
    queryFn: () => UserServices.fetchOne(currentId),
    queryKey: [UserQueryKey.fetchOne, currentId],
  });

export const useUser = () => {
  const client = useQueryClient();

  const invalidateQuery = (queryKeys: UserQueryKey[]) =>
    client.invalidateQueries({
      queryKey: queryKeys,
    });

  return {
    invalidateQuery,
    useFetchOneQuery,
  };
};
