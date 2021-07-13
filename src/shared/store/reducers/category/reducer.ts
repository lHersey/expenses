import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Category from 'shared/models/category';

type InitialState = {
  categories: Category[];
};

const initialState: InitialState = {
  categories: [],
};

const { reducer, actions } = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    categoryAdded: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
  },
});

export const { categoryAdded } = actions;
export default reducer;
