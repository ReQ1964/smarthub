import classes from './Modal.module.scss';
import { createPortal } from 'react-dom';
import Button from '../UI/Button';

const Modal = ({ children, isOpen, onClose, defaultButton }) => {
	if (!isOpen) return null;

	return createPortal(
		<>
			<div onClick={onClose} className={classes.overlay} />
			<div className={classes.modal}>
				{children}
				{defaultButton && <Button onClick={onClose}>Close</Button>}
			</div>
		</>,
		document.getElementById('portal')
	);
};

export default Modal;
