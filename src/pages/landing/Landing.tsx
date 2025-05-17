import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '@/assets/logo.svg';

/**
 * 랜딩 페이지 – 중앙 정렬(margin: 0 auto) 적용 + 배너 색상 #FF8888
 */
const Landing: React.FC = () => {
  const topMemes = ['TOP 1', 'TOP 2', 'TOP 3', 'TOP 4', 'TOP 5'];

  return (
    <div className="relative w-full max-w-[500px] mx-auto h-[852px] bg-[white] overflow-hidden font-rounded">
      {/* ───────── Header ───────── */}
      <header className="relative flex items-center  gap-[12px] mb-[24px] ml-[24px]">
        <div className="w-10 h-10 rounded-full bg-rose-400 outline outline-[1.5px] outline-black flex items-center justify-center">
          <img src={LogoSvg} alt="logo" className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-logo select-none">
          <span className="text-[#FF8989]">밈</span>
          <span className="text-[#111111]">클리</span>
        </h1>
      </header>

      {/* ───────── 핑크 배너 (배경 #FF8888) ───────── */}
      <section className="relative left-1/2 -translate-x-1/2 w-[600px] max-w-[110%] bg-[#FF8888] rounded-3xl flex items-center justify-center px-6 text-center pt-[51px] pb-[51px]">
        <p className="text-[white] text-3xl leading-10 whitespace-pre-line">
          {`밈랭킹은 한국에서 유행한\n밈을 모으는 랭킹으로\n어쩌구저쩌구 입니다`}
        </p>
      </section>

      {/* ───────── Top 5 카드 ───────── */}
      <section className="relative bg-[] rounded-3xl border-[3px] border-[#FF7878] flex flex-col items-center pt-[31px] mt-[41px] mx-[40px]">
        <h2 className="text-2xl text-stroke-pink text-glow-pink font-logo mb-[14px]">급상승 밈 Top 5</h2>
        <ul className="flex flex-col text-2xl text-white font-paper leading-10 ">
          {topMemes.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      {/* ───────── CTA 버튼 ───────── */}
      <Link
        to="/ranking"
        className="relative w-40 h-10 group mt-[20px] justify-center mx-auto flex items-center"
      >
        <span className="relative inset-0 bg-[#FFDBDB] rounded-3xl transition-transform duration-150 group-hover:scale-105 group-active:scale-95 " />
        <span className="relative block w-[160px] rounded-3xl bg-[#FFDBDB] flex items-center justify-center text-red-300 text-xl font-logo">
          더 알아보기
        </span>
      </Link>
    </div>
  );
};

export default Landing;
