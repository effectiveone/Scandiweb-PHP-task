import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { Dashboard } from './pages';
import { Products } from './pages';
import { AddProduct } from './pages';
import { ErrorElement } from './components';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: 'add-product',
        element: <AddProduct />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
