import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import productsReducer from './productsSlice';

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false, // Jeśli używasz serializableCheck, możesz dostosować ustawienia tutaj
//   thunk: true, // Włącz redux-thunk jako middleware
// });

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
  //   enhancers: [composedEnhancer],
});

export default store;
