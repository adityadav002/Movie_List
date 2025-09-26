import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import AddMovie from './section/AddMovie.jsx';
import DeleteMovie from './section/DeleteMovie.jsx';
import UserManagement from './section/UserManagement.jsx';
import NotFound from './section/NotFound.jsx';
import Dashboard from './section/Dashboard.jsx';

import Action from './page/Action.jsx';
import Animated from './page/Animated.jsx';
import Comedy from './page/Comedy.jsx';
import Horror from './page/Horror.jsx';
import SciFi from './page/SciFi.jsx';
import Drama from './page/Drama.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: 'add-movie', element: <AddMovie /> },
      { path: 'delete-movie', element: <DeleteMovie /> },
      { path: 'user-management', element: <UserManagement /> },
      
      { path: '/action', element: <Action />},
      { path: '/animated', element: <Animated />},
      { path: '/comedy', element: <Comedy />},
      { path: '/horror', element: <Horror />},
      { path: '/scifi', element: <SciFi />},
      { path: '/drama', element: <Drama />},
    ],
  },
  { path: '*', element: <NotFound /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
