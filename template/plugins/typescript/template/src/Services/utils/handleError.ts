export interface Error {
  message?: string
  data?: any
  status?: number
}

export default function ({ message, data, status }: Error) {
  return Promise.reject({ message, data, status })
}
