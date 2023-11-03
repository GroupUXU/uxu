import { createContext, useReducer, useEffect } from "react";
import type { ReactElement, PropsWithChildren, Dispatch } from "react";
import type { ToastChunks, ToastChunkAction, ToastChunk } from "utils";
import { ToastContainer } from "../components";

const initialToastChunksContext: { toastChunks: ToastChunks, toastChunkDispatch: Dispatch<ToastChunkAction> } = {
  toastChunks: [],
  toastChunkDispatch: () => { /* empty */
  }
};

export const ToastChunksContext = createContext ( initialToastChunksContext );

type ProviderToastChunksProps = PropsWithChildren<{
  toastChunksInitial: ToastChunks;
}>;

function toastReducer ( state: ToastChunks, action: ToastChunkAction ): ToastChunks {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, action.payload];
    case 'REMOVE_TOAST':
      return state.filter ( toast => toast.id !== action.payload.id );
    default:
      return state;
  }
}

export function ProviderToastChunks ( {children, toastChunksInitial}: ProviderToastChunksProps ): ReactElement {
  const [toastChunks, toastChunkDispatch] = useReducer ( toastReducer, toastChunksInitial );

  useEffect ( () => {
    const timers: (NodeJS.Timeout | null)[] = toastChunks.map ( ( toast: ToastChunk ) => {
      if ( toast.delay ) {
        return setTimeout ( () => {
          toastChunkDispatch ( {type: 'REMOVE_TOAST', payload: {id: toast.id}} );
        }, toast.delay );
      }
      return null;
    } );

    return () => {
      timers.forEach ( ( timer ) => {
        if ( timer ) {
          clearTimeout ( timer );
        }
      } );
    };
  }, [toastChunks, toastChunkDispatch] );


  return (
    <ToastChunksContext.Provider value={{toastChunks, toastChunkDispatch}}>
      {children}
      <ToastContainer
        toastChunkDispatch={toastChunkDispatch}
        toastChunks={toastChunks}
      />
    </ToastChunksContext.Provider>
  );
}
