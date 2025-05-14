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
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 999999,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      fontSize: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '5px solid red',
    }}
    onClick={closeModal}
  >
    🔥 모달 테스트 - {selectedMeme.title}
  </div>
  );
};