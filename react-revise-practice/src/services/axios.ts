import axios from 'axios'
import { BASE_URL } from '@/constants/environment'

const getRequest = async <T>(url: string, queryParams?: object) => {
  const response = await axios.get<T>(`${BASE_URL}/${url}`, {
    params: queryParams
  })
  return response
}

const getRequestById = async <T>(url: string, id: string, queryParams?: object): Promise<T> => {
  const response = await axios.get<T>(`${BASE_URL}/${url}/${id}`, {
    params: queryParams
  })
  return response.data
}

export { getRequest, getRequestById }
