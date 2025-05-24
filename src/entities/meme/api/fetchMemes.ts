import { api } from '@/shared/api/axiosInstance';
import { Meme } from '../model/types';
import { mockMemeData } from '../model/types';

export const fetchMemes = async (): Promise<Meme[]> => {
  try {
    const response = await api.get<Meme[]>('/api/trends/ranking?page=1&limit=20');
    const data = response.data;

    if (Array.isArray(data) && data.length > 0) {
      return data;
    } else {
      console.warn('API에서 빈 배열 반환, mock 데이터 사용');
      return mockMemeData;
    }
  } catch (error) {
    console.error('API 요청 실패, mock 데이터 사용:', error);
    return mockMemeData;
  }
};