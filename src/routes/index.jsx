import MainLayout from '@layouts/MainLayout/index';
import Home from '@pages/Home/index';
import NotFound from '@pages/NotFound/index';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
