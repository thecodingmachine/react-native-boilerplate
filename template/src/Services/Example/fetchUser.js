import ApiInstance from '@/Services/ApiInstance'

export default async (userId, thunkAPI) => {
  const response = await ApiInstance.get(`${userId}`)
  console.log('response', response.data)
  return response.data
}
