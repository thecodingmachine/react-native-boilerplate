import api from '@/Services'

export default async (userId, { rejectWithValue }) => {
  try {
    const response = await api.get(`users/${userId}`)
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
}
