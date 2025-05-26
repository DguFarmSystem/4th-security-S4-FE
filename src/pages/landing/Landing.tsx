import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../../assets/logo.svg';
import axios from 'axios';

// axios 인스턴스 생성
const api = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Origin': 'https://4th-security-s4-fe-8om6.vercel.app'
  },
  withCredentials: false,
});

interface RisingMeme {
  id: string;
  title: string;
  platform: string;
  url: string;
  thumbnailUrl: string;
  hashtags: string[];
  likeCount: number;
  commentCount: number;
  viewCount: number;
  shareCount: number;
  uploadTime: string;
  color?: string;
}

/**
 * 랜딩 페이지 – 중앙 정렬(margin: 0 auto) 적용 + 배너 색상 #FF8888
 */

const Landing: React.FC = () => {
  const [risingMemes, setRisingMemes] = useState<RisingMeme[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRisingMemes = async () => {
      try {
        console.log('Fetching from:', '/api/trends/rising');
        const response = await api.get('/api/trends/rising');

        console.log('API Response:', response.data);

        // API 응답 데이터에 색상 추가
        const memesWithColors = response.data.map((meme: RisingMeme, index: number) => ({
          id: meme.id,
          title: meme.title,
          platform: meme.platform,
          url: meme.url,
          thumbnailUrl: meme.thumbnailUrl,
          hashtags: meme.hashtags,
          likeCount: meme.likeCount,
          commentCount: meme.commentCount,
          viewCount: meme.viewCount,
          shareCount: meme.shareCount,
          uploadTime: meme.uploadTime,
          color: index === 0 ? '#FF4B4B' :
                 index === 1 ? '#FF6E6E' :
                 index === 2 ? '#FF8484' :
                 index === 3 ? '#FFB6B6' :
                 '#FFB6B6'
        }));

        setRisingMemes(memesWithColors);
      } catch (err) {
        console.error('Error details:', err);
        if (axios.isAxiosError(err)) {
          console.error('Error response:', err.response);
          console.error('Error request:', err.request);
          console.error('Error config:', err.config);
          setError(err.response?.data?.message || err.message);
        } else {
          setError('An error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRisingMemes();
  }, []);

  return (
    <div className="relative w-full max-w-[450px] mx-auto h-auto bg-[white] font-rounded mb-[24px] mx-[10px]">
      {/* ───────── Header ───────── */}
      <header className="relative flex items-center gap-[12px] mb-[24px] ml-[24px]">
        <Link to="/" className="flex items-center gap-[12px] no-underline">
          <div className="w-10 h-10 rounded-full bg-rose-400 outline outline-[1.5px] outline-black flex items-center justify-center">
            <img src={LogoSvg} alt="logo" className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-logo select-none">
            <span className="text-[#FFB3B3]">밈</span>
            <span className="text-[#FFB3B3]">클리</span>
          </h1>
        </Link>
      </header>

      {/* ───────── 핑크 배너 (배경 #FF8888) ───────── */}
      <section
        className="relative left-1/2 -translate-x-1/2 w-[750px] max-w-[110%] rounded-3xl flex items-center justify-center px-6 text-center pt-[51px] pb-[51px]"
        style={{ background: 'linear-gradient(to bottom, #FF7979, #FFB3B3)' }}
      >
        <p className="text-[white] font-normal text-[25px] leading-[45px] tracking-normal whitespace-pre-line text-center">
          {`밈랭킹은 한국에서 유행한\n밈을 모으는 랭킹으로\n어쩌구저쩌구 입니다`}
        </p>
      </section>

      {/* ───────── Top 5 카드 ───────── */}
      <section className="relative rounded-[26px] bg-[#FFE1E1] flex flex-col mt-[41px] mx-[0px]">
        <h2
          className="text-[32px] font-logo tracking-normal"
          style={{ color: '#FF4B4B', textAlign: 'center', fontWeight: '400' }}
        >
          급상승 밈 Top 5
        </h2>
        {error ? (
          <div className="text-red-500 text-center p-4">{error}</div>
        ) : isLoading ? (
          <ul className="flex flex-col list-none font-paper font-normal text-[white] text-[25px] leading-[45px] tracking-normal items-start px-5 pb-[5px] gap-[8px]">
            {Array.from({ length: 5 }).map((_, idx) => (
              <li
                key={idx}
                className="animate-pulse flex items-center gap-5 w-full"
                style={{ maxWidth: '370px' }}
              >
                <div className="bg-[#ffbdbd] rounded-md h-[40px] w-[80px] ml-[8px]" />
                <div className="flex flex-col justify-center truncate w-full">
                  <div className="bg-[#ffbdbd] h-[40px] w-full rounded-sm" />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-col list-none font-paper font-normal text-[white] text-[25px] leading-[45px] tracking-normal items-start px-5 pb-[5px] gap-[8px]">
            {risingMemes.map((meme, index) => (
              <li
                key={meme.id}
                className="flex items-center gap-5 w-full"
                style={{ backgroundColor: meme.color, borderRadius: '10px', maxWidth: '370px' }}
              >
                <span className="font-bold min-w-[80px] item-center ml-[8px]">TOP {index + 1}</span>
                <div className="flex flex-col item-center truncate w-full">
                  <span className="text-[20px] truncate">{meme.title}</span>
                  <span className="text-[14px] text-[#FFF6F6] truncate">{meme.platform}</span>
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
        className="relative flex w-[215px] h-[42px] mx-auto mt-[12px] items-center justify-center group no-underline"
      >
        {/* 바탕 + 아웃라인(박스 그림자) */}
        <span
          className="absolute inset-0 rounded-[26px] bg-[#FFDBDB] w-[215px] h-[42px] transition-transform duration-150 group-hover:scale-105 group-active:scale-95 mt-[12px] z-[1]"
        />
        <span
          className="absolute inset-0 top-[1px] left-[4px] rounded-[26px] bg-[#FF7878] w-[215px] h-[42px] transition-transform duration-150 group-hover:scale-105 group-active:scale-95 mt-[12px] z-[0]"
        />

        {/* 라벨 */}
        <span className="relative z-[3] text-[#FF7F7F] text-[18px] leading-none mt-[12px]">더 알아보기</span>
      </Link>
    </div>
  );
};

export default Landing;
