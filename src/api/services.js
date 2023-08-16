import axiosInstance from '@/services/default'

export const apiService = {
  async getCharacters(params) {
    return (await axiosInstance.get('', { params })).data
  }
}