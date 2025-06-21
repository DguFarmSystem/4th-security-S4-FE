import { useEffect, useState } from 'react';
import { fetchMemes } from '@/entities/meme/api/fetchMemes';
import { MemeCard } from '@/entities/meme/ui/MemeCard';
import { Meme } from '@/entities/meme/model/types';
import { Pagination } from '@/shared/ui/Pagination';

export const MemeList = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMemes(currentPage).then(({ memes, totalPages }) => {
      const sorted = [...memes].sort((a, b) => a.rank_position - b.rank_position);
      setMemes(sorted);
      setTotalPages(totalPages);
    });
  }, [currentPage]);

  return (
     <div className="flex flex-col gap-[46px] w-full items-center">
  {memes.map((meme) => (
    <MemeCard key={meme.video_id} meme={meme} />
  ))}

  {/* 페이지네이션 UI 추가 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
</div>
  );
};