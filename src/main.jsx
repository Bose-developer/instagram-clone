import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Viewstory from './Component/Viewstory.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/story/:id/:tot', element:<Viewstory/>}
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
