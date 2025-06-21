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

export const fetchTopMemes = async (): Promise<Meme[]> => {
  try {
    const response = await api.get<RawMeme[]>('/trends/rising');
    const rawData = response.data.slice(0, 3); // 상위 3개만 사용

      return rawData.map((item, index) => ({
        video_id: item.id,
        title: item.title,
        hashtags: item.hashtags,
        thumbnail_url: item.thumbnailUrl,
        platform: item.platform,
        rank_position: index + 1, // 첫 페이지이므로 인덱스 그대로 사용
        ranking_score: 100 - index, // 필요 시 계산 로직 조정
      }));
    } catch (error) {
      console.error('API 요청 실패, mock 데이터 사용:', error);
      return mockMemeData.slice(0, 3);
    }
}

export const fetchMemes = async (page: number = 1): Promise<{ memes: Meme[]; totalPages: number}> => {
  try {
    const response = await api.get<MemeApiResponse>(`/trends/ranking?page=${page}&limit=20`);
    const rawData = response.data.content;
    const totalPages = response.data.totalPages;

    if (Array.isArray(rawData) && rawData.length > 0) {
      const mapped: Meme[] = rawData.map((item, index) => ({
        video_id: item.id,
        title: item.title,
        hashtags: item.hashtags,
        thumbnail_url: item.thumbnailUrl,
        platform: item.platform,
        rank_position: index + 1 + (page - 1) * 20, // 페이지네이션 반영
        ranking_score: 100 - index, // 필요 시 계산 로직 조정
      }));
       return { memes: mapped, totalPages };
    } else {
      return { memes: mockMemeData, totalPages: 1 };
    }
  } catch (error) {
    console.error('API 요청 실패, mock 데이터 사용:', error);
    return { memes: mockMemeData, totalPages: 1 };
  }
};