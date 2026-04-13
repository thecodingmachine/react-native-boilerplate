import type { User } from './user.schema';

import { queryOptions } from '@tanstack/react-query';

import { UserApis } from './user.api';

export const UserQueryKeys = {
  fetchOne: 'fetchOneUser',
};

export const fetchOneQueryOptions = (currentId: User['id']) =>
  queryOptions({
    enabled: currentId >= 0,
    queryFn: () => UserApis.fetchOne(currentId),
    queryKey: [UserQueryKeys.fetchOne, currentId],
  });
