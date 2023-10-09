import { useEffect, useRef } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, ReactElement } from "react";
import classnames from 'classnames';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import type { ModalProps } from "./types";

export function Modal({ open = false, className, children, onClick, renderDirectlyInBody = false, onClose }: ModalProps): ReactElement | null {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const modalDiv = document.createElement('div');
    modalRef.current = modalDiv;
    document.body.appendChild(modalDiv);

    return (): void => {
      if (modalRef.current) {
        document.body.removeChild(modalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'scroll';

    const handleGlobalKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && open) {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);

    return (): void => {
      document.body.style.overflow = 'scroll';
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>): void => {
    if(e.key === 'Escape') {
      onClose?.();
    }
  };

  const modalContent = (
    <div
      className={classnames(styles.modalContainer, className)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );

  return renderDirectlyInBody && modalRef.current ? createPortal(modalContent, modalRef.current) : modalContent;
};
