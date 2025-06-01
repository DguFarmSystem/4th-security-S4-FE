import { Meme } from '../model/types';
import { fetchMemeDetail } from '../api/fetchMemeDetail';
import { useMemeModal } from '@/features/openMemeModal';

interface MemeCardProps {
  meme: Meme;
}

export const MemeCard = ({ meme }: MemeCardProps) => {
  const { title, hashtags, video_id, thumbnail_url } = meme;
  const { openModal } = useMemeModal();

  const handleClick = async () => {
    try {
      const detail = await fetchMemeDetail(video_id);
      openModal(detail);
    } catch (err) {
      console.error('밈 상세 조회 실패:', err);
    }
  };

  return (
   <div
  className="relative cursor-pointer h-[118px] bg-[#FFDBDB] rounded-[10px] w-full flex items-center gap-4 px-[16px]"
  onClick={handleClick}
>
  {/* 동그라미: 카드 내부 좌상단에 고정 */}
  <div className="absolute top-[-19px] left-[-19px] w-[38px] h-[38px] bg-[#FFC3C3] rounded-full z-10" />

  {/* 왼쪽 텍스트 정보 */}
  <div className="flex flex-col flex-1 justify-between h-full">
    <p className="font-rounded text-[25px] leading-[24px] text-[#FFF] shrink-0 break-words">
      {title}
    </p>
    <p className="font-rounded font-normal text-[16px] leading-[24px] text-[#FFF6F6] w-[202px] shrink-0 break-words">
      {hashtags.map((tag) => `#${tag}`).join(' ')}
    </p>
  </div>

  {/* 오른쪽 썸네일 */}
  <div className="flex items-center h-full font-rounded">
    {thumbnail_url ? (
      <img
      src={thumbnail_url}
      alt="썸네일"
      className="w-[85px] h-[91px] rounded-[9px] object-cover"/>
      ) : (
        <button
      style={{ fontFamily: 'MoneygraphyRounded, sans-serif' }}
      className="appearance-none text-[16px] font-normal text-[#FFF6F6]
                 w-[85px] h-[91px] shrink-0 bg-[#FF7878] rounded-[9px]
                 flex items-center justify-center text-center border-none outline-none focus:ring-0"
    >
      썸네일
    </button>
      )
    }
  </div>
</div>
  );
};