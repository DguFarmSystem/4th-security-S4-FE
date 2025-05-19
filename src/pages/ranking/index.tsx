import { MemeList } from '@/widgets/memeList/MemeList';
import { Link } from 'react-router-dom';
import LogoSvg from '@/assets/logo.svg';

export default function RankingPage() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center px-[35px] pt-[46px] relative w-full max-w-[400px] mx-auto h-auto bg-[white] font-rounded mb-[24px]">
      <header className="relative flex items-center gap-[12px] mb-[24px] ml-[24px]">
        <Link to="/" className="flex items-center gap-[12px] transition-transform duration-200 hover:scale-105 active:scale-95">
          <div className="w-10 h-10 rounded-full bg-rose-400 outline outline-[1.5px] outline-black flex items-center justify-center">
            <img src={LogoSvg} alt="logo" className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-logo select-none">
            <span className="text-[#FF8989]">밈</span>
            <span className="text-[#111111]">클리</span>
          </h1>
        </Link>
      </header>
      <MemeList />
    </div>
  );
}