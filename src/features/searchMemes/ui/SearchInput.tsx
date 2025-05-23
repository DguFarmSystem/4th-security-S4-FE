import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface SearchInputProps {
  initialValue?: string;
}

export default function SearchInput({ initialValue = '' }: SearchInputProps) {
  const [input, setInput] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!input.trim()) return;
    navigate(`/search?q=${encodeURIComponent(input.trim())}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        maxWidth: '400px',
        margin: '16px auto 24px',
      }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="밈 제목이나 해시태그 검색"
        style={{
          height: '40px',
          padding: '0 16px',
          border: `3px solid ${isFocused ? '#FF7878' : '#FFBDBD'}`,
          borderRadius: '10px',
          fontSize: '14px',
          color: '#111111',
          fontFamily: 'MoneygraphyRounded, sans-serif',
          flex: '1',
          whiteSpace: 'nowrap',
          overflowX: 'auto',
          marginRight: '5px',
          outline: 'none',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          height: '40px',
          padding: '0 16px',
          backgroundColor: '#FF7878',
          color: '#FFF6F6',
          fontFamily: 'MoneygraphyRounded, sans-serif',
          fontSize: '14px',
          borderRadius: '10px',
          outline: 'none',
          border: 'none',
          transition: 'opacity 0.2s',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = '0.8';
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = '1';
        }}
      >
        검색
      </button>
    </div>
  );
}