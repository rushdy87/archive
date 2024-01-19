import { createPortal } from 'react-dom';
import './Modal.scss';

const Overlays = ({ closeOverlay }) =>
  createPortal(
    <div className='modal'>
      <div className='modal-content'>
        <button className='close-btn' onClick={closeOverlay}>
          &times;
        </button>
        <h2>Modal</h2>
        <p>
          The FitnessGram Pacer Test is a multistage aerobic capacity test that
          progressively gets more difficult as it continues. The running speed
          starts slowly, but gets faster each minute after you hear this signal.
          starts slowly, but gets faster each minute after you hear this signal.
          starts slowly, but gets faster each minute after you hear this signal.
          starts slowly, but gets faster each minute after you hear this signal.
          starts slowly, but gets faster each minute after you hear this signal.
          starts slowly, but gets faster each minute after you hear this signal.
          starts slowly, but gets faster each minute after you hear this signal.
          starts slowly, but gets faster each minute after you hear this signal.
          starts slowly, but gets faster each minute after you hear this signal.
        </p>
      </div>
    </div>,
    document.getElementById('overlays')
  );

const Modal = ({ closeOverlay }) => {
  return <Overlays closeOverlay={closeOverlay} />;
};
export default Modal;
