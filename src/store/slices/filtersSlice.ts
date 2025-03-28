import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilterState } from 'components/business/Filters/Filters';
import { ICountry, IGenre } from 'types/types';

// Подумать над промежуточными типами genre и country
// Запрашивать genre и country с сервера
// rating строка или число?

interface IFilterData {
  genres: IGenre[];
  countries: ICountry[];
}

const filterData: IFilterData = {
  genres: [],
  countries: [],
};

interface IFiltersSliceState {
  filters: IFilterState;
  loading: boolean;
  page: Page;
  filmsOnPages: number;
  filterData: IFilterData;
}

const initialFilters: IFilterState = {
  genre: [],
  country: '',
  rating: '5',
};

const initialState: IFiltersSliceState = {
  filters: initialFilters,
  loading: false,
  page: '1',
  filmsOnPages: 10,
  filterData,
};

type Page = string | number;

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IFilterState>) => {
      state.filters = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialFilters;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
    setFilmsOnPage: (state, action: PayloadAction<number>) => {
      state.filmsOnPages = action.payload;
    },
    setFiltersData: (state, action: PayloadAction<IFilterData>) => {
      state.filterData = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const {
  setFilters,
  clearFilters,
  setLoading,
  setPage,
  setFilmsOnPage,
  setFiltersData,
} = filtersSlice.actions;
