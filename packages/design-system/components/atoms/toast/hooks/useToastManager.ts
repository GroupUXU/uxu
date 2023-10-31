import React, { useState, useEffect } from 'react';
import type { ToastProps } from '../toast';

// Definicja interfejsu ToastData
interface ToastData extends Omit<ToastProps, 'remove'> {
  delay?: number;
}

// Hook useToastManager
export function useToastManager() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (toast: ToastData) => {
    setToasts((prev) => [toast, ...prev]);

    if (toast.delay) {
      setTimeout(() => {
        removeToast(toast.id);
      }, toast.delay);
    }
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts: toasts.slice(0, 10), addToast, removeToast };
}
