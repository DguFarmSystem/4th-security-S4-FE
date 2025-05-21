import { create } from 'zustand';
import { MemeDetail } from '@/entities/meme/model/types';

interface MemeModalState {
  selectedMeme: MemeDetail | null;
  openModal: (meme: MemeDetail) => void;
  closeModal: () => void;
}

const useMemeModal = create<MemeModalState>((set) => ({
  selectedMeme: null,
  openModal: (meme) => set({ selectedMeme: meme }),
  closeModal: () => set({ selectedMeme: null }),
}));

export default useMemeModal;