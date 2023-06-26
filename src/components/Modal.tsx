interface ModalProps {
  open: boolean;
  children: JSX.Element;
  onClose: () => void;
}

const Modal = ({ open, children, onClose }: ModalProps) => {

  if (!open) { return null; }

  return (
    <div className="modal">
      <span className="modal-close" onClick={onClose}>&times;</span>
      <div className="modal-body">
        { children }
      </div>
    </div>
  );
}

export default Modal;
