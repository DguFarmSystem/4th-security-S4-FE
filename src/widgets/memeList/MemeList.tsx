import { useEffect, useState } from 'react';
import { fetchMemes } from '@/entities/meme/api/fetchMemes';
import { MemeCard } from '@/entities/meme/ui/MemeCard';
import { Meme } from '@/entities/meme/model/types';

export const MemeList = () => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    fetchMemes().then((data) => {
      const sorted = [...data].sort((a, b) => a.rank_position - b.rank_position);
      setMemes(sorted);
    });
  }, []);

  return (
     <div className="flex flex-col gap-[46px] w-full items-center">
  {memes.map((meme) => (
    <MemeCard key={meme.video_id} meme={meme} />
  ))}
</div>
  );
};