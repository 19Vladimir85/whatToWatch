import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Header } from './components/business/Header/Header';
import { MainPage } from 'pages/MainPage/MainPage';
import { AboutFilm } from 'pages/AboutFilm/AboutFilm';
import { FavoriteFilms } from 'pages/FavoriteFilms/FavoriteFilms';
import { AllFilms } from 'pages/AllFilms/AllFilms';
import { ActorsList } from 'pages/ActorsList/ActorsList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { useEffect } from 'react';
import { setAuth } from 'store/slices/authSlice';
import classNames from 'classnames';

function App() {
  const { isChecked } = useSelector((state: RootState) => state.themeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuth({ authUser: localStorage.getItem('authUser') }));
  }, []);

  return (
    <div className={classNames(styles.app, isChecked ? 'light' : 'dark')}>
      <Header />
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/movie/random" element={<AboutFilm />} />
          <Route path="/movie/:filmId" element={<AboutFilm />} />
          <Route path="/movie" element={<AllFilms />} />
          <Route path="/favorite" element={<FavoriteFilms />} />
          <Route path="/actors" element={<ActorsList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
