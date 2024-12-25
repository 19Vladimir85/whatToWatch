import styles from './Header.module.css';
import { Menu } from '../Menu/Menu';
import { Search } from '../Search/Search';
import { Icon } from '../../ui/Icon/Icon';
import { Button } from 'components/ui/Button/Button';
import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSnowing } from 'store/slices/snowSlice';
import { RootState } from 'store/store';
import { setAuth } from 'store/slices/authSlice';
import { useState } from 'react';
import { AuthModal } from '../AuthModal/AuthModal';

export const Header: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const isChecked = useSelector(
    (state: RootState) => state.snowReducer.isChecked
  );

  const onHandleClose = () => {
    setModalOpen(false);
  };

  const onChange = () => {
    dispatch(setSnowing(!isChecked));
  };

  const authUser = useSelector(
    (state: RootState) => state.authReducer.authUser
  );

  const handleLogIn = () => {
    setModalOpen(true);
  };

  const handleLogOut = () => {
    dispatch(setAuth({ authUser: '' }));
    localStorage.removeItem('authUser');
  };

  return (
    <>
      <AuthModal onClose={onHandleClose} isOpen={modalOpen} />
      <div className={styles.header}>
        <Menu />
        <Search />
        <div className={styles.snowfall}>
          <p className={styles.snowfallText}>Снегопад</p>
          <Switch
            className={styles.snowfallSwitch}
            checked={isChecked}
            onChange={onChange}
          />
        </div>
        {authUser ? (
          <>
            <div>Привет {authUser} </div>
            <Button
              className={styles.header_btn}
              icon={<Icon id="author" className={styles.icon_author} />}
              onClick={handleLogOut}
            >
              Выйти
            </Button>
          </>
        ) : (
          <Button
            className={styles.header_btn}
            icon={<Icon id="author" className={styles.icon_author} />}
            onClick={handleLogIn}
          >
            Войти
          </Button>
        )}
      </div>
    </>
  );
};
