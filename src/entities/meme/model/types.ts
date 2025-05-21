export interface Meme {
  video_id: string;
  title: string;
  hashtags: string[];
  thumbnail_url: string;
  rank_position: number;
  ranking_score: number;
  platform: string;
}
export interface MemeDetail extends Meme {
  description: string;
  url: string;
  like_count: number;
  comment_count: number;
  view_count: number;
  share_count: number;
  upload_time: string;
}

export const mockMemeData: MemeDetail[] = [
  {
    video_id: '1',
    title: '깡총깡총 챌린지',
    hashtags: ['깡총깡총', '밈', '개그'],
    thumbnail_url: '/thumbnail/1.png',
    rank_position: 1,
    ranking_score: 92.1,
    platform: 'TikTok',
    description: '귀엽고 활기찬 깡총깡총 댄스 밈입니다.',
    url: 'https://example.com/meme/1',
    like_count: 1200,
    comment_count: 345,
    view_count: 7890,
    share_count: 150,
    upload_time: '2024-05-01T12:00:00Z',
  },
  {
    video_id: '2',
    title: '나랑 사귀자는 거야?',
    hashtags: ['연애', '질문'],
    thumbnail_url: '/thumbnail/2.png',
    rank_position: 2,
    ranking_score: 89.3,
    platform: 'Instagram',
    description: '톡톡 튀는 멘트로 인기를 끈 연애 밈이에요.',
    url: 'https://example.com/meme/2',
    like_count: 980,
    comment_count: 260,
    view_count: 6230,
    share_count: 80,
    upload_time: '2024-05-03T09:30:00Z',
  },
  {
    video_id: '3',
    title: '어친잼 챌린지',
    hashtags: ['친구', '챌린지'],
    thumbnail_url: '/thumbnail/3.png',
    rank_position: 3,
    ranking_score: 88.7,
    platform: 'YouTube',
    description: '친구와 함께 도전하는 유쾌한 챌린지 밈입니다.',
    url: 'https://example.com/meme/3',
    like_count: 1350,
    comment_count: 410,
    view_count: 8421,
    share_count: 200,
    upload_time: '2024-05-05T15:10:00Z',
  },
  {
    video_id: '4',
    title: '하늘에서 떨어진 미소',
    hashtags: ['힐링', '일상'],
    thumbnail_url: '/thumbnail/4.png',
    rank_position: 4,
    ranking_score: 87.5,
    platform: 'TikTok',
    description: '잔잔하고 따뜻한 느낌을 주는 힐링 밈이에요.',
    url: 'https://example.com/meme/4',
    like_count: 760,
    comment_count: 180,
    view_count: 5210,
    share_count: 50,
    upload_time: '2024-05-08T18:45:00Z',
  },
  {
    video_id: '5',
    title: '이모티콘 밈 콘테스트',
    hashtags: ['이모지', '콘테스트'],
    thumbnail_url: '/thumbnail/5.png',
    rank_position: 5,
    ranking_score: 86.0,
    platform: 'Instagram',
    description: '다양한 이모티콘을 활용한 밈 콘테스트입니다.',
    url: 'https://example.com/meme/5',
    like_count: 880,
    comment_count: 220,
    view_count: 6140,
    share_count: 120,
    upload_time: '2024-05-10T11:20:00Z',
  },
  {
    video_id: '6',
    title: '식후땡 댄스 챌린지',
    hashtags: ['댄스', '유쾌', '챌린지'],
    thumbnail_url: '/thumbnail/6.png',
    rank_position: 6,
    ranking_score: 84.9,
    platform: 'YouTube',
    description: '식사 후 즐기는 유쾌한 댄스 챌린지입니다.',
    url: 'https://example.com/meme/6',
    like_count: 1100,
    comment_count: 330,
    view_count: 7290,
    share_count: 170,
    upload_time: '2024-05-12T14:00:00Z',
  },
];