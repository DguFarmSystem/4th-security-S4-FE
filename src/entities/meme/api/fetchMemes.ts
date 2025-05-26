import { api } from '@/shared/api/axiosInstance';
import { Meme } from '../model/types';
import { mockMemeData } from '../model/types';

interface RawMeme {
  id: string;
  title: string;
  hashtags: string[];
  thumbnailUrl: string;
  platform: string;
  url: string;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  shareCount: number;
  uploadTime: string;
}

interface MemeApiResponse {
  content: RawMeme[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export const fetchMemes = async (): Promise<Meme[]> => {
  try {
    const response = await api.get<MemeApiResponse>('/api/trends/ranking?page=1&limit=20');
    const rawData = response.data.content;

    if (Array.isArray(rawData) && rawData.length > 0) {
      const mapped: Meme[] = rawData.map((item, index) => ({
        video_id: item.id,
        title: item.title,
        hashtags: item.hashtags,
        thumbnail_url: item.thumbnailUrl,
        platform: item.platform,
        rank_position: index + 1,
        ranking_score: 100 - index, // 필요 시 계산 로직 조정
      }));
      return mapped;
    } else {
      console.warn('API에서 빈 배열 반환, mock 데이터 사용');
      return mockMemeData;
    }
  } catch (error) {
    console.error('API 요청 실패, mock 데이터 사용:', error);
    return mockMemeData;
  }
};