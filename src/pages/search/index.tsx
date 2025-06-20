import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Meme } from '@/entities/meme/model/types';
import { fetchMemes } from '@/entities/meme/api/fetchMemes';
import SearchInput from '@/features/searchMemes/ui/SearchInput'
import { MemeCard } from '@/entities/meme/ui/MemeCard';
import { Pagination } from '@/shared/ui/Pagination';
import { MemeModal } from '@/features/openMemeModal';
import LogoSvg from '../../assets/logo.svg';

export default function SearchPage() {
  const query = new URLSearchParams(useLocation().search).get('q') ?? '';
  const [results, setResults] = useState<Meme[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  // 계산된 페이지 수
  const totalPages = Math.ceil(results.length / itemsPerPage);

  // 현재 페이지의 밈들
  const currentItems = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (!query) return;
    fetchMemes().then(({ memes }) => {
      const cleanedQuery = query.replace(/\s+/g, '').toLowerCase();

      const filtered = memes.filter((meme) => {
      const cleanedTitle = meme.title.replace(/\s+/g, '').toLowerCase();
      const cleanedTags = meme.hashtags.map((tag) => tag.toLowerCase());

      if (query.startsWith('#')) {
        const tagQuery = cleanedQuery.slice(1);
         // 정확히 일치하는 태그만 허용
        return cleanedTags.includes(tagQuery);
      }
  return (
    cleanedTitle.includes(cleanedQuery) ||
    cleanedTags.some((tag) => tag.includes(cleanedQuery))
  );
});

      setResults(filtered);
    });
  }, [query]);

  return (
    <>
    <div className="relative w-full max-w-[400px] mx-auto h-auto bg-white font-rounded mb-[24px] px-[35px] pt-[46px]">
       <header className="relative flex items-center gap-[12px] mb-[24px]">
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

       {/* 검색창 삽입 */}
        <SearchInput initialValue={query} />

      <h1 className="text-[20px] font-bold mb-[24px] text-[#111111] text-center">
        검색 결과: " {query} "
      </h1>

      <div className="flex flex-col gap-[46px] w-full items-center">
        {currentItems.length > 0 ? (
          currentItems.map((meme) => (
            <MemeCard key={meme.video_id} meme={meme} />
          ))
        ) : (
          <p className="text-center text-[#111111]">결과가 없습니다.</p>
        )}
      </div>
      {totalPages > 1 && (
  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
)}
    </div>
    {/* 모달 추가 */}
      <MemeModal />
    </>
  );
}