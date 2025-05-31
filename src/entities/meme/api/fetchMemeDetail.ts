import { MemeDetail } from '../model/types';
import { api } from '@/shared/api/axiosInstance';

interface RawMemeDetail {
  id: string;
  title: string;
  description: string;
  platform: string;
  url: string;
  thumbnail_url: string;
  hashtags: string[];
  like_count: number;
  comment_count: number;
  view_count: number;
  share_count: number;
  upload_time: string;
}

export const fetchMemeDetail = async (id: string): Promise<MemeDetail> => {
  try {
    const response = await api.get<RawMemeDetail>(`/videos/${id}`);
    const data = response.data;

    const mapped: MemeDetail = {
      video_id: data.id,
      title: data.title,
      description: data.description,
      platform: data.platform,
      url: data.url,
      thumbnail_url: data.thumbnail_url,
      hashtags: data.hashtags,
      like_count: data.like_count,
      comment_count: data.comment_count,
      view_count: data.view_count,
      share_count: data.share_count,
      upload_time: data.upload_time,
      rank_position: 0,       // 상세 API에는 없음 → 기본값 설정
      ranking_score: 0,       // 상세 API에는 없음 → 기본값 설정
    };

    return mapped;
  } catch (error) {
    console.error('밈 상세 조회 실패:', error);
    throw new Error('밈 상세 정보를 불러올 수 없습니다.');
  }
};