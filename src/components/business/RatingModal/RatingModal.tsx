import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Rating } from '../../ui/Rating/Rating';

interface IRatingModal {
  isOpen?: boolean;
  onClose?: () => void;
}

export const RatingModal: React.FC<IRatingModal> = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal open={isOpen} onClose={onClose} center>
        <h2>Оцените работу приложения</h2>
        <Rating size="big" startRating={0} />
        <button onClick={onClose}>Отправить</button>
      </Modal>
    </div>
  );
};
