import api from '@/Services'

export default async (userId) => {
  console.log('USER ID', userId)
  const response = await api.get(`users/${userId}`)
  return response.data
}
