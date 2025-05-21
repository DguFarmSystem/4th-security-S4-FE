import { useEffect } from 'react';
import { useMemeModal } from '@/features/openMemeModal';

export const MemeModal = () => {
  const { selectedMeme, closeModal } = useMemeModal();

  useEffect(() => {
    if (selectedMeme) {
      console.log('🎯 MemeModal 열림!');
      return () => console.log('❌ MemeModal 닫힘!');
    }
  }, [selectedMeme]);

  if (!selectedMeme) return null;
  console.log('모달 상태:', selectedMeme);

  return (
      <div
        onClick={closeModal}
        style={{
          position: 'fixed',
          inset: '0',
          zIndex: 999999,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '315px',
            height: '432px',
            borderRadius: '11px',
            backgroundColor: '#FFF',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* 썸네일 영역 */}
          <div
            style={{
              width: '276px',
              height: '189px',
              flexShrink: 0,
              borderRadius: '17px',
              backgroundColor: '#FF8989',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 400,
                lineHeight: '45px',
                color: '#FFF6F6',
                fontFamily: 'MoneygraphyRounded, sans-serif',
                textAlign: 'center',
              }}
            >
              썸네일
            </span>
          </div>

          {/* 설명 */}
          <p
            style={{
              width: '271px',
              height: '110px',
              flexShrink: 0,
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '32px',
              letterSpacing: '-0.285px',
              margin: '24px auto',
              overflowWrap: 'break-word',
            }}
          >
            {selectedMeme.description ?? '밈 설명 박스'}
          </p>

          {/* 외부 링크 버튼 */}
          <a
  href={selectedMeme.url ?? '#'}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    width: '230px',
    height: '31px',
    flexShrink: 0,
    borderRadius: '11px',
    backgroundColor: '#FFEBEB',
    textAlign: 'center',
    margin: '0 auto',
    textDecoration: 'none',
    transition: 'opacity 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  onMouseOver={(e) => {
    (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8';
  }}
  onMouseOut={(e) => {
    (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
  }}
>
  <span
    style={{
      color: '#000',
      fontFamily: 'Inter, sans-serif',
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '32px',
      letterSpacing: '-0.285px',
    }}
  >
    바로가기 버튼
  </span>
</a>
        </div>
      </div>
  );
};