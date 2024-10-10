import type { User } from './schema';

import { useQuery, useQueryClient } from '@tanstack/react-query';

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

export const useUser = () => {
  const client = useQueryClient();

  const invalidateQuery = (queryKeys: UserQueryKey[]) =>
    client.invalidateQueries({
      queryKey: queryKeys,
    });

  return {
    useFetchOneQuery,
    invalidateQuery,
  };
};
