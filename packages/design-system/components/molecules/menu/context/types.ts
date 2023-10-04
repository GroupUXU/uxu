import type { Dispatch, SetStateAction } from "react";
import type { MenuPosition } from "../types";

export type MenuContextValue = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  menuPosition: MenuPosition;
  containerSize: { width: number, height: number };
}
