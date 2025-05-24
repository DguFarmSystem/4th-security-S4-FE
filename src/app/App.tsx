import { Routes, Route} from 'react-router-dom';
import RankingPage from '@/pages/ranking';
import LandingPage from '@/pages/landing'
import SearchPage from '@/pages/search'
import '@/app/styles/globals.css';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}