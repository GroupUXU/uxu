import { createContext, useContext } from 'react';
import type { MenuContextValue } from './types';

const initialDefaultMenuContext: MenuContextValue = {
  isOpen: false,
  setIsOpen: (): void => { /** empty **/ },
  menuPosition: 'bottom',
  containerSize: { width: 0, height: 0 },
};

export const Context = createContext<MenuContextValue>(initialDefaultMenuContext);

export const useMenuContext = (): MenuContextValue => {
  const context = useContext(Context);
  return context;
};
