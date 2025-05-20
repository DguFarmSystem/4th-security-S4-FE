import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '@/assets/logo.svg';

interface RisingMeme {
  video_id: string;
  title: string;
  rank_position: number;
  thumbnail_url: string;
  platform: string;

  color: string;
}

// 더미 데이터
const MOCK_RISING_MEMES: RisingMeme[] = [
  {
    video_id: "6640c123456789",
    title: "깡총깡총 챌린지",
    rank_position: 1,
    thumbnail_url: "https://cdn.example.com/meme1.jpg",
    platform: "TikTok",
    color: "#FF4B4B"
  },
  {
    video_id: "6640c234567890",
    title: "뉴진스 하니 밈",
    rank_position: 2,
    thumbnail_url: "https://cdn.example.com/meme2.jpg",
    platform: "YouTube",
    color:' #FF6E6E'
  },
  {
    video_id: "6640c345678901",
    title: "르세라핌 카즈하 밈",
    rank_position: 3,
    thumbnail_url: "https://cdn.example.com/meme3.jpg",
    platform: "TikTok",
    color: "#FF8484"
  },
  {
    video_id: "6640c456789012",
    title: "에스파 윈터 밈",
    rank_position: 4,
    thumbnail_url: "https://cdn.example.com/meme4.jpg",
    platform: "YouTube",
    color: "#FFB6B6"
  },
  {
    video_id: "6640c567890123",
    title: "블랙핑크 리사 밈",
    rank_position: 5,
    thumbnail_url: "https://cdn.example.com/meme5.jpg",
    platform: "TikTok",
    color: "#FFB6B6"
  }
];

/**
 * 랜딩 페이지 – 중앙 정렬(margin: 0 auto) 적용 + 배너 색상 #FF8888
 */

const Landing: React.FC = () => {
  const [risingMemes, setRisingMemes] = useState<RisingMeme[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 더미 데이터 사용
    const loadMockData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // 로딩 효과를 위한 딜레이
      setRisingMemes(MOCK_RISING_MEMES);
      setIsLoading(false);
    };

    loadMockData();
  }, []);

  return (
    <div className="relative w-full max-w-[400px] mx-auto h-auto bg-[white] font-rounded mb-[24px]">
      {/* ───────── Header ───────── */}
      <header className="relative flex items-center gap-[12px] mb-[24px] ml-[24px]">
        <Link to="/" className="flex items-center gap-[12px] no-underline">
          <div className="w-10 h-10 rounded-full bg-rose-400 outline outline-[1.5px] outline-black flex items-center justify-center">
            <img src={LogoSvg} alt="logo" className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-logo select-none">
            <span className="text-[#FF8989]">밈</span>
            <span className="text-[#111111]">클리</span>
          </h1>
        </Link>
      </header>

      {/* ───────── 핑크 배너 (배경 #FF8888) ───────── */}
      <section className="relative left-1/2 -translate-x-1/2 w-[600px] max-w-[110%] 
       rounded-3xl flex items-center justify-center px-6 text-center pt-[51px] pb-[51px]" style={{ background: 'linear-gradient(to bottom, #FF7979, #FFB3B3)' }}>
        <p className="text-[white] font-normal text-[25px] leading-[45px] tracking-normal whitespace-pre-line text-center">
          {`밈랭킹은 한국에서 유행한\n밈을 모으는 랭킹으로\n어쩌구저쩌구 입니다`}
        </p>
      </section>

      {/* ───────── Top 5 카드 ───────── */}
      <section className="relative rounded-[26px]  bg-[#FFE1E1]
                    flex flex-col mt-[41px] mx-[36px]">
        {/* 타이틀 */}
        <h2
          className="text-[32px] font-logo tracking-normal"
          style={{
            color: '#FF4B4B',
            textAlign: 'center',
            fontWeight: '400',
          }}
        > 급상승 밈 Top 5</h2>
        {/* 목록 */}
        {isLoading ? (
            <ul className="flex flex-col list-none font-paper font-normal text-[white]
            text-[25px] leading-[45px] tracking-normal items-start px-5 pb-[5px] gap-[8px]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <li
                key={idx}
                className="animate-pulse flex items-center gap-5 w-full bg-[#ffdede] rounded-[10px] max-w-[250px] h-[45px]">
              <div className="bg-[#ffbdbd] rounded-md h-[40px] w-[80px] ml-[8px]" />
              <div className="flex flex-col justify-center truncate w-[200px]">
              <div className="bg-[#ffbdbd] h-[40px] w-full rounded-sm" />
              </div>
             </li>
              ))}
          </ul>
        ) : (
          <ul className="flex flex-col list-none font-paper font-normal text-[white]
                 text-[25px] leading-[45px] tracking-normal items-start px-5 pb-[5px] gap-[8px]">
            {risingMemes.map((meme) => (
              <li key={meme.video_id} className="flex items-center gap-5 w-full" style={{ backgroundColor: meme.color, borderRadius: '10px',maxWidth: '250px' }}>
                <span className="font-bold min-w-[80px] item-center ml-[8px]">TOP {meme.rank_position}</span>
                <div className="flex flex-col item-center truncate " >
                  <span className="text-[20px]">{meme.title}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ───────── CTA 버튼 ───────── */}
      <Link
        to="/ranking"
        /* ▶︎ 고정 크기 & 가운데 배치 */
        className="relative flex w-[165px] h-[42px] mx-auto mt-[12px]
                   items-center justify-center group no-underline"
      >
        {/* 바탕 + 아웃라인(박스 그림자) */}
        <span
          className="absolute inset-0 rounded-[26px] bg-[#FFDBDB]
                     w-[165px] h-[42px]
                     transition-transform duration-150
                     group-hover:scale-105 group-active:scale-95
                     mt-[12px]
                     z-[1]
                     "
        />
        <span
          className="absolute inset-0 top-[1px] left-[4px] rounded-[26px] bg-[#FF7878]
                     w-[165px] h-[42px]
                     transition-transform duration-150
                     group-hover:scale-105 group-active:scale-95
                     mt-[12px]
                     z-[0]
                     "
        />

        {/* 라벨 */}
        <span className="relative z-[3] text-[#FF7F7F] text-[18px] leading-none mt-[12px]">
          더 알아보기
        </span>
      </Link>
    </div>
  );
};

export default Landing;
