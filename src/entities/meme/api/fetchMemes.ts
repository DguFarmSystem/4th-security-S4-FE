import { Meme } from '../model/types';
import { mockMemeData } from '../model/types';

export const fetchMemes = async (): Promise<Meme[]> => {
  return mockMemeData.map((detail) => ({
    video_id: detail.video_id,
    title: detail.title,
    hashtags: detail.hashtags,
    thumbnail_url: detail.thumbnail_url,
    rank_position: detail.rank_position,
    ranking_score: detail.ranking_score,
    platform: detail.platform,
  }));
};