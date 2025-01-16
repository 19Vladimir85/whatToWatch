import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Header } from './components/business/Header/Header';
import { MainPage } from 'pages/MainPage/MainPage';
import { AboutFilm } from 'pages/AboutFilm/AboutFilm';
import { RandomFilm } from 'pages/RandomFilm/RandomFilm';
import { FavouriteFilms } from 'pages/FavouriteFilms/FavouriteFilms';
import { AllFilms } from 'pages/AllFilms/AllFilms';
import { Snow } from 'components/business/Snow/Snow';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { useEffect } from 'react';
import { setAuth } from 'store/slices/authSlice';

function App() {
  const { isChecked } = useSelector((state: RootState) => state.snowReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuth({ authUser: localStorage.getItem('authUser') }));
  }, []);

  return (
    <div className={styles.App}>
      {isChecked && <Snow />}
      <Header />
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/movie/random" element={<RandomFilm />} />
        <Route path="/movie/:filmId" element={<AboutFilm />} />
        <Route path="/movie" element={<AllFilms />} />
        <Route path="/favourite" element={<FavouriteFilms />} />
      </Routes>
    </div>
  );
}

export default App;
