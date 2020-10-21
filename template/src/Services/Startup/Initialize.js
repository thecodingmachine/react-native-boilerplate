import { FetchOneUserAction } from '@/Store/User/FetchOne'

export default async (args, { dispatch }) => {
  await dispatch(FetchOneUserAction(1))
}
