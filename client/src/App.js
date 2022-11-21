import './index.css';
import { 
  createBrowserRouter, 
  RouterProvider,
  Route 
} from 'react-router-dom'
import { Landing } from './components/landing/Landing';
import About from './components/about/About';
import Services from './components/services/Services';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/Dashboard';
import Processes from './components/processes/Processes';
import Events from './components/events/Events';
import Present from './components/processes/present/Present';
import Values from './components/processes/values/Values';
import Commitment from './components/processes/commitment/Commitment';
import Self from './components/processes/self/Self';
import Diffusion from './components/processes/diffusion/Diffusion';
import Acceptance from './components/processes/acceptance/Acceptance';
import UserInfo from './components/userInfo/UserInfo';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/dashboard/processes",
      element: <Processes />
    },
    {
      path: "/dashboard/processes/present",
      element: <Present />
    },
    {
      path: "/dashboard/processes/values",
      element: <Values />
    },
    {
      path: "/dashboard/processes/commitment",
      element: <Commitment />
    },
    {
      path: "/dashboard/processes/self",
      element: <Self />
    },
    {
      path: "/dashboard/processes/diffusion",
      element: <Diffusion />
    },
    {
      path: "/dashboard/processes/acceptance",
      element: <Acceptance />
    },
    {
      path: "/dashboard/events",
      element: <Events />
    },
    {
      path: "/dashboard/user-info",
      element: <UserInfo />
    }
  
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
