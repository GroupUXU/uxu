import { createContext, useReducer, useEffect } from "react";
import type { PropsWithChildren, Dispatch } from "react";
import type { ToastChunks, ToastChunkAction } from "utils";

const initialToastChunksContext: { toastChunks: ToastChunks, toastChunkDispatch: Dispatch<ToastChunkAction> } = {
  toastChunks: [],
  toastChunkDispatch: () => {}
};

export const ToastChunksContext = createContext(initialToastChunksContext);

type ProviderToastChunksProps = PropsWithChildren<{
  toastChunksInitial: ToastChunks;
}>;

function toastReducer(state: ToastChunks, action: ToastChunkAction): ToastChunks {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, action.payload];
    case 'REMOVE_TOAST':
      return state.filter(toast => toast.id !== action.payload.id);
    default:
      return state;
  }
}

export function ProviderToastChunks({ children, toastChunksInitial }: ProviderToastChunksProps) {
  const [toastChunks, toastChunkDispatch] = useReducer(toastReducer, toastChunksInitial);

  useEffect(() => {
    toastChunks.forEach((toast) => {
      if (toast.delay) {
        const timerId = setTimeout(() => {
          toastChunkDispatch({ type: 'REMOVE_TOAST', payload: { id: toast.id } });
        }, toast.delay);
      }
    });

  }, [toastChunks, toastChunkDispatch]);

  return (
    <ToastChunksContext.Provider value={{ toastChunks, toastChunkDispatch }}>
      {children}
    </ToastChunksContext.Provider>
  );
}
