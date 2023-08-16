import { apiService } from '@/api/services'
import { useRequest } from '@/hooks/useRequest'

export const useGetCharacters = () => {
  return useRequest(apiService.getCharacters)
}