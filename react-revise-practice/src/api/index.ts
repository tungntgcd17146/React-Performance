import { getRequest, getRequestById } from '@/services/axios'
import { Product, UserContact } from '@/types'

const fetchContacts = async (queryParams?: { [key: string]: string }) => {
  const response = await getRequest<UserContact[]>('users', queryParams)
  return response
}

const fetchProducts = async (queryParams?: { [key: string]: string }) => {
  const response = await getRequest<Product[]>('products', queryParams)
  return response
}

const fetchProductById = async (id: string, queryParams?: { [key: string]: string }) => {
  const response = await getRequestById<Product>('products', id, queryParams)
  return response
}

export { fetchContacts, fetchProducts, fetchProductById }
