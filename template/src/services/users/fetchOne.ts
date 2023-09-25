import { instance } from '@/services/instance';

export default async (id: number) =>
  instance.get<{ name: string }>(`/users/${id}`);
