import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiHandler } from '../utils/apiHandler.js';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await apiHandler.get('/products');
    return response.data.data;
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData) => {
    const response = await apiHandler.post(
      '/products',
      JSON.stringify(productData)
    );
    return response.data;
  }
);

export const deleteProducts = createAsyncThunk(
  'products/deleteProducts',
  async (productIds) => {
    console.log('productIds', productIds);
    await apiHandler.delete('/products', {
      params: { productIds: productIds.join() },
    });
    return productIds;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    // Dodaj tutaj inne akcje związane z zarządzaniem stanem produktów
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => !action.payload.includes(product.id)
        );
      });
  },
});

export const {
  // Dodaj nazwy innych akcji związanych ze stanem
} = productsSlice.actions;

export default productsSlice.reducer;
