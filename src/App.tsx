import { useState } from 'react';
// components
import Modal from './components/Modal';
import Epg from './components/Epg';
// style
import './App.css';

function App() {

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <div className="container">
        <button className="big-button" onClick={handleOpen}>
          MOSTRAR EPG
        </button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Epg />
      </Modal>
    </>
  );
}

export default App;
