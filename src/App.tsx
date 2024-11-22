import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Header } from './components/business/Header/Header';
import { MainPage } from 'pages/MainPage/MainPage';
import { AboutFilm } from 'pages/AboutFilm/AboutFilm';
import { RandomFilm } from 'pages/RandomFilm/RandomFilm';
import { AllFilms } from 'pages/AllFilms/AllFilms';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/movie/random" element={<RandomFilm />} />
        <Route path="/movie/:filmId" element={<AboutFilm />} />
        <Route path="/movie" element={<AllFilms />} />
      </Routes>
    </div>
  );
}

export default App;
