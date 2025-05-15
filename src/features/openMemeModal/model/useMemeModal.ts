import { create } from 'zustand';
import { Meme } from '@/entities/meme/model/types';

interface MemeModalState {
  selectedMeme: Meme | null;
  openModal: (meme: Meme) => void;
  closeModal: () => void;
}

const useMemeModal = create<MemeModalState>((set) => ({
  selectedMeme: null,
  openModal: (meme) => set({ selectedMeme: meme }),
  closeModal: () => set({ selectedMeme: null }),
}));

export default useMemeModal;