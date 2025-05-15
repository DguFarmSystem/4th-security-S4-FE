import { Meme } from '../model/types';

export const fetchMemes = async (): Promise<Meme[]> => {
  // 목데이터 (추후 API 연동 가능)
  return [
    {
      id: '1',
      title: '깡총깡총 챌린지',
      tags: ['깡총깡총', '밈', '개그'],
      thumbnailUrl: '/thumbnail/1.png',
      rank: 1,
    },
    {
      id: '2',
      title: '나랑 사귀자는 거야?',
      tags: ['연애', '질문'],
      thumbnailUrl: '/thumbnail/2.png',
      rank: 2,
    },
    {
      id: '3',
      title: '어친잼 챌린지',
      tags: ['친구', '챌린지'],
      thumbnailUrl: '/thumbnail/3.png',
      rank: 3,
    },
    {
      id: '4',
      title: '하늘에서 떨어진 미소',
      tags: ['힐링', '일상'],
      thumbnailUrl: '/thumbnail/4.png',
      rank: 4,
    },
    {
      id: '5',
      title: '이모티콘 밈 콘테스트',
      tags: ['이모지', '콘테스트'],
      thumbnailUrl: '/thumbnail/5.png',
      rank: 5,
    },
    {
      id: '6',
      title: '식후땡 댄스 챌린지',
      tags: ['댄스', '유쾌', '챌린지'],
      thumbnailUrl: '/thumbnail/6.png',
      rank: 6,
    },
  ];
};