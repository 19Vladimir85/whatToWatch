import styles from './Header.module.css';
import { Menu } from '../Menu/Menu';
import { Search } from '../Search/Search';
import { Icon } from '../../ui/Icon/Icon';
import { Button } from 'components/ui/Button/Button';
import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'store/slices/themeSlice';
import { RootState } from 'store/store';
import { setAuth } from 'store/slices/authSlice';
import { useState } from 'react';
import { AuthModal } from '../AuthModal/AuthModal';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const isChecked = useSelector(
    (state: RootState) => state.themeReducer.isChecked
  );

  const onHandleClose = () => {
    setModalOpen(false);
  };

  const onChange = () => {
    dispatch(setTheme(!isChecked));
  };

  const authUser = useSelector(
    (state: RootState) => state.authReducer.authUser
  );

  const handleClick = () => {
    if (authUser) {
      dispatch(setAuth({ authUser: '' }));
      localStorage.removeItem('authUser');
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <AuthModal onClose={onHandleClose} isOpen={modalOpen} />
      <div className={classNames(styles.header, isChecked ? 'light' : 'dark')}>
        <Menu />
        <Search />
        <div className={styles.theme}>
          {isChecked ? 'Светлая' : 'Темная'} тема
          <Switch
            className={styles.snowfallSwitch}
            checked={isChecked}
            onChange={onChange}
          />
        </div>
        {authUser && <div>Привет {authUser} </div>}
        <Button
          className={styles.header_btn}
          icon={<Icon id="author" className={styles.icon_author} />}
          onClick={handleClick}
        >
          {authUser ? 'Выйти' : 'Войти'}
        </Button>
      </div>
    </>
  );
};
