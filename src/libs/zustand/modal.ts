'use client';
import { create } from 'zustand';

export const useModalStore = create<{
  modalContent: React.ReactNode;
  setModalContent: (modalContent: React.ReactNode) => void;
}>()((set) => ({
  modalContent: null,
  setModalContent: (modalContent: React.ReactNode) => set({ modalContent }),
}));
