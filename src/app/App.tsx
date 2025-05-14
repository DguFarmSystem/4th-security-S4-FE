import { Routes, Route } from 'react-router-dom';
import RankingPage from '@/pages/ranking';
import { MemeModal } from '@/features/openMemeModal';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/ranking" element={<RankingPage />} />
      </Routes>

      {/* 라우터 밖에서 모달 항상 렌더링되게 */}
      <MemeModal />
    </>
  );
}