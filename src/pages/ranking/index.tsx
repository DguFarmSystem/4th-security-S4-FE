import { MemeList } from '@/widgets/memeList/MemeList';
import { MemeModal } from '@/features/openMemeModal';

export default function RankingPage() {
  return (
    <main className="bg-white w-full min-h-screen flex flex-col items-center px-[35px] pt-[46px]">
      <MemeList />
      <MemeModal />
    </main>
  );
}