import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import type {Product, ProductMutation} from "../../types";

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchAll',
  async () => {
    const {data: products} = await axiosApi.get<Product[]>('/products');
    return products;
  }
);

export const createProduct = createAsyncThunk<void, ProductMutation>(
  'products/create',
  async (product) => {
    const productWithoutId = {
      ...product,
      price: parseInt(product.price)
    };

    await axiosApi.post('/products', productWithoutId);
  }
);