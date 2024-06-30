import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SellPage from './pages/SellPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/sell',
      element: <SellPage />
    }
  ]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
