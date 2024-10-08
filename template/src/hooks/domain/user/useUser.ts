import type { User } from './schema';

import { useQuery } from '@tanstack/react-query';

import { queryClient } from '@/App';

import { UserServices } from './userService';

const enum QueryKey {
  fetchOne = 'fetchOneUser',
}

const useFetchOneQuery = (currentId: User['id']) =>
  useQuery({
    queryKey: [QueryKey.fetchOne, currentId],
    queryFn: () => UserServices.fetchOne(currentId),
    enabled: currentId >= 0,
  });

const invalidateFetchOneQuery = queryClient.invalidateQueries({
  queryKey: [QueryKey.fetchOne],
});

export const useUser = () => {
  return {
    useFetchOneQuery,
    invalidateFetchOneQuery,
  };
};
