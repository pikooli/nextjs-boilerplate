'use client';
import { create } from 'zustand';

interface AlertContent {
  type: 'error' | 'success' | 'info';
  message: React.ReactNode;
  code?: string;
}

export const useAlertStore = create<{
  alertContent: AlertContent | null;
  setAlertContent: (alertContent: AlertContent | null) => void;
}>()((set) => ({
  alertContent: null,
  setAlertContent: (alertContent: AlertContent | null) => set({ alertContent }),
}));
