import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { useDispatch } from 'react-redux';
import { setAuth } from 'store/slices/authSlice';

interface IAuthModal {
  isOpen?: boolean;
  onClose?: () => void;
}

export const AuthModal: React.FC<IAuthModal> = ({ isOpen, onClose }) => {
  const [nikName, setNikName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(setAuth({ authUser: nikName }));
    localStorage.setItem('authUser', nikName);
    onClose();
  };
  console.log(nikName);

  return (
    <Modal open={isOpen} onClose={onClose} center>
      <form>
        <input
          required
          onChange={(event) => setNikName(event.target.value)}
          type="text"
          value={nikName}
        ></input>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          value={password}
        ></input>
        <button onClick={handleLogIn} type="submit">
          Войти
        </button>
      </form>
    </Modal>
  );
};
