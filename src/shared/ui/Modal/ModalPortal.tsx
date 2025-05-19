import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
}

export const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById('modal-root');

  if (!el) return null;
  
  return createPortal(children, el);
};