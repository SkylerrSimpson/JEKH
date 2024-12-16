import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './Layout/Root';
import { lazy } from 'react';
import { Suspense } from 'react';
import Loading from './Pages/Loading';
import Contact from './Pages/Contact';
const AboutMe = lazy(() => import('./Pages/AboutMe'));
const Home = lazy(() => import('./Pages/Home'));
const Portfolio = lazy(() => import('./Pages/Portfolio'));
const Shop = lazy(() => import('./Pages/Shop'));
const Cart = lazy(() => import('./Pages/Cart'));

const router = createBrowserRouter([
{
  path: '/',
  element: <Root/>,
  children: [
    {
      index: true,
      element: <Home/>,
    },
    {
      path: 'about-me',
      element: <AboutMe />,
    },
    {
      path: 'portfolio',
      element: <Portfolio />,
    },
    {
      path: 'shop',
      element: <Shop />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
    {
      path: 'cart',
      element: <Cart />,
    }
  ]
}
]);

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
