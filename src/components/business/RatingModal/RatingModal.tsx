import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Rating } from '../../ui/Rating/Rating';
import { Chip } from 'components/ui/Chip/Chip';
import styles from './RatingModal.module.css';

interface IRatingModal {
  isOpen?: boolean;
  onClose?: () => void;
}

export const RatingModal: React.FC<IRatingModal> = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal open={isOpen} onClose={onClose} center>
        <div className={styles.rating_modal}>
          <h2>Оцените работу приложения</h2>
          <Rating size="big" startRating={0} />
          <h3>Что Вам понравилось больше всего?</h3>
          <div className={styles.chips_modal}>
            <Chip title="Контент" onClick={() => {}}></Chip>
            <Chip title="Навигация" onClick={() => {}}></Chip>
            <Chip title="Дизайн" onClick={() => {}}></Chip>
            <Chip title="Другое" onClick={() => {}}></Chip>
          </div>
          <button className={styles.button_modal} onClick={onClose}>
            Отправить
          </button>
        </div>
      </Modal>
    </div>
  );
};
