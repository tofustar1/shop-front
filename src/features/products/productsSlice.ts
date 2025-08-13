import type {Product} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {createProduct, fetchProducts} from "./productsThunk.ts";

interface State {
  items: Product[];
  fetchLoading: boolean;
  createLoading: boolean;
}

const initialState: State = {
  items: [],
  fetchLoading: false,
  createLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, {payload: products}) => {
        state.fetchLoading = false;
        state.items = products;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.fetchLoading = false;
      });

    builder
      .addCase(createProduct.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.createLoading = false;
      })
      .addCase(createProduct.rejected, (state) => {
        state.createLoading = false;
      });
  },
  selectors: {
    selectProducts: state => state.items,
    selectFetchLoading: state => state.fetchLoading,
    selectCreateLoading: state => state.createLoading,
  },
});

export const productsReducer = productsSlice.reducer;
export const {selectProducts, selectFetchLoading} = productsSlice.selectors;