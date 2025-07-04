import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router';
import router from './routes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);