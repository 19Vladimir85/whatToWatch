import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilterState } from 'components/business/Filters/Filters';

// Подумать над промежуточными типами genre и country
// Запрашивать genre и country с сервера
// rating строка или число?

interface IFiltersSliceState {
  filters: IFilterState;
  loading: boolean;
  page: Page;
}

const initialFilters: IFilterState = {
  genre: [],
  country: '',
  rating: '5',
  // filmsAmount: 10,
};

const initialState: IFiltersSliceState = {
  filters: initialFilters,
  loading: false,
  page: '1',
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
  },
});

export const filterReducer = filtersSlice.reducer;
export const { setFilters, clearFilters, setLoading, setPage } =
  filtersSlice.actions;
