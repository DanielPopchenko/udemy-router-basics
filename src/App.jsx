import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductDetails from './pages/ProductDetails';

// ! creating pathes and elements that should render

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/products/:productId',
        element: <ProductDetails />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};

export default App;
