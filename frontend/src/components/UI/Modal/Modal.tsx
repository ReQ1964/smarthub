import React from 'react';
import classes from './Modal.module.scss';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  defaultButton: boolean;
}

const Modal = ({ children, isOpen, onClose, defaultButton }: IModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div onClick={onClose} className={classes.overlay} />
      <div className={classes.modal}>
        {children}
        {defaultButton && <Button onClick={onClose}>Close</Button>}
      </div>
    </>,
    document.getElementById('portal')!,
  );
};

export default Modal;
