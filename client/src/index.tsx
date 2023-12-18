import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import RibbonStart from './routes/RibbonStart';
import Riddle from './routes/Riddle';
import Gift from './routes/Gift';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // TODO: make this path dynamic
        path: '/ribbons/tswift',
        element: <RibbonStart />,
      },
      {
        // TODO: make this path dynamic
        path: '/ribbons/tswift/1',
        element: <Riddle />,
      },
      {
        // TODO: make this path dynamic
        path: '/ribbons/tswift/gift',
        element: <Gift />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
