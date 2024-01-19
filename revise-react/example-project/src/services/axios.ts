import axios from 'axios'
import { BASE_URL } from '~/constants'

const getRequest = async <T>(url: string, queryParams?: object) => {
  const response = await axios.get<T>(`${BASE_URL}/${url}`, {
    params: queryParams
  })
  return response
}

export { getRequest }
