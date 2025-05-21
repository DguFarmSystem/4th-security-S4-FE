import { MemeDetail } from '../model/types';
import { mockMemeData } from '../model/types';

export const fetchMemeDetail = async (id: string): Promise<MemeDetail> => {
  const detail = mockMemeData.find((meme) => meme.video_id === id);
  if (!detail) throw new Error('밈 상세 정보 없음');
  return Promise.resolve(detail);
};