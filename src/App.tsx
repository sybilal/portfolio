import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/experience',
          element: <Experience />,
        },
        {
          path: '/skills',
          element: <Skills />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ],
  {
    basename: '/portfolio',
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
