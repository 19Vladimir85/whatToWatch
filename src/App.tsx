import { Route, Routes} from "react-router-dom";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { MainPage } from "pages/MainPage/MainPage";
import { AboutFilm } from "pages/AboutFilm/AboutFilm";
import { RandomFilm } from "pages/RandomFilm/RandomFilm";
import { AllFilms } from "pages/AllFilms/AllFilms";
import { useContext, useState } from "react";
import {FilterContext} from "./context/filterContext"
import { IFilterState } from "components/business/Filters/Filters";


function App() {
  const {filters: defFilters}=useContext(FilterContext);
 const [filters, setFilters] = useState<IFilterState>(defFilters);
 
  return (
    <FilterContext.Provider value={{filters, setFilters}}>
    <div className={styles.App}>
      <Header />
      <Routes>
      <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/movie/random" element={<RandomFilm/>}/>
        <Route path="/movie/:filmId" element={<AboutFilm/>}/>
        <Route path="/movie" element={<AllFilms/>}/>
      </Routes>
      
    </div>
    </FilterContext.Provider>
  );
}

export default App;
