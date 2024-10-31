import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilterState } from 'components/business/Filters/Filters';

// Подумать над промежуточными типами genre и country
// Запрашивать genre и country с сервера
// rating строка или число?

interface IFiltersSliceState {
  filters: IFilterState;
  loading: boolean;
}

const defFiltersState: IFilterState = {
  genre: [],
  country: 'Россия',
  raiting: '5',
};

const initialState: IFiltersSliceState = {
  filters: defFiltersState,
  loading: false,
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IFilterState>) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;