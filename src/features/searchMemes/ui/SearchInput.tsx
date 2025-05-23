import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface SearchInputProps {
  initialValue?: string;
}

export default function SearchInput({ initialValue = '' }: SearchInputProps) {
  const [input, setInput] = useState(initialValue);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!input.trim()) return;
    navigate(`/search?q=${encodeURIComponent(input.trim())}`);
  };

  return (
    <div className="flex items-center gap-2 px-[20px] w-full max-w-[400px] mx-auto mt-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="밈 제목이나 해시태그 검색"
        className="flex-1 h-[40px] px-4 rounded-[10px] border-[1.5px] border-[#FFBDBD] text-sm font-rounded placeholder:text-[#D6D6D6] text-black focus:outline-none focus:ring-2 focus:ring-[#FF8989]"
      />
      <button
        onClick={handleSearch}
        className="h-[40px] px-4 bg-[#FF8989] text-[#FFF6F6] font-rounded text-sm rounded-[10px] hover:opacity-80 transition"
      >
        검색
      </button>
    </div>
  );
}