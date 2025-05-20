import { MemeList } from '@/widgets/memeList/MemeList';
import { Link } from 'react-router-dom';
import LogoSvg from '@/assets/logo.svg';
import { MemeModal } from '@/features/openMemeModal';

export default function RankingPage() {
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
      <div className="relative flex justify-center mb-[30px] transform rotate-180">
        <div className="flex items-end " />
          {/* 오른쪽 바 */}
          <div className="bg-[#FFDBDB] w-[84px] h-[60px] " />
          {/* 가운데 기둥 */}
          <div className="z-10 bg-[#FF7F7F] w-[85px] h-[120px] " />
          {/* 왼쪽 바 */}
          <div className="bg-[#FFDBDB] w-[74px] h-[85px] " />
      </div>
      <MemeList />
    </div>
    <MemeModal />
    </>
  );
}