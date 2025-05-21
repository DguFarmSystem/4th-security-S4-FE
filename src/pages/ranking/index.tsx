import { useEffect, useState } from 'react';
import { MemeList } from '@/widgets/memeList/MemeList';
import { Link } from 'react-router-dom';
import LogoSvg from '@/assets/logo.svg';
import { Meme } from '@/entities/meme/model/types';
import { fetchMemes } from '@/entities/meme/api/fetchMemes';
import { MemeModal } from '@/features/openMemeModal';

export default function RankingPage() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    fetchMemes().then(setMemes);
  }, []);

  const first = memes.find((m) => m.rank_position === 1);
  const second = memes.find((m) => m.rank_position === 2);
  const third = memes.find((m) => m.rank_position === 3);

  return (
    <>
    <div className="relative w-full max-w-[400px] mx-auto h-auto bg-[white] font-rounded mb-[24px]">
      <header className="relative flex items-center gap-[12px] mb-[24px] ">
        <Link to="/" className="flex items-center gap-[12px] no-underline">
          <div className="w-10 h-10 rounded-full outline outline-[1.5px] outline-black flex items-center justify-center">
            <img src={LogoSvg} alt="logo" className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-logo select-none">
            <span className="text-[#FF8989]">밈</span>
            <span className="text-[#111111]">클리</span>
          </h1>
        </Link>
      </header>
       {/* 랭킹 박스 디자인 */}
        <div className="relative flex justify-center gap-[6px] mb-[30px] transform rotate-180">
          {/* 2등 */}
          <div className="bg-[#FFDBDB] w-[74px] h-[85px] flex items-center justify-center text-[#FFF6F6] text-center p-1 text-xs rotate-180">
              <span className="break-words whitespace-pre-line leading-tight">
      {second?.title ?? '2등'}
    </span>
          </div>

          {/* 1등 */}
          <div className="z-10 bg-[#FF7F7F] w-[85px] h-[120px] flex items-center justify-center text-[#FFF6F6] text-center p-1 text-xs font-bold rotate-180">
             <span className="break-words whitespace-pre-line leading-tight">
      {first?.title ?? '1등'}
    </span>
          </div>

          {/* 3등 */}
          <div className="bg-[#FFDBDB] w-[84px] h-[60px] flex items-center justify-center text-[#FFF6F6] text-center p-1 text-xs rotate-180">
            <span className="break-words whitespace-pre-line leading-tight">
      {third?.title ?? '3등'}
    </span>
          </div>
        </div>

        {/* 전체 랭킹 리스트 */}
        <MemeList />
      </div>

      <MemeModal />
    </>
  );
}