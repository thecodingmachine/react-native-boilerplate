import api from '@/Services'

export default async (userId) => {
  const response = await api.get(`users/${userId}`)
  return response.data
}
