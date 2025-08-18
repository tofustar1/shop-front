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
    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('price', product.price);

    if (product.image) {
      formData.append('image', product.image);
    }

    await axiosApi.post('/products', formData);
  }
);