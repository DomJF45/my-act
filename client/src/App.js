import './index.css';
import { 
  createBrowserRouter, 
  RouterProvider,
  BrowserRouter as Router,
  Outlet
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Landing } from './components/landing/Landing';
import About from './components/about/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/Dashboard';
import Processes from './components/processes/Processes';
import Present from './components/processes/present/Present';
import Values from './components/processes/values/Values';
import Commitment from './components/processes/commitment/Commitment';
import Self from './components/processes/self/Self';
import Acceptance from './components/processes/acceptance/Acceptance';
import UserInfo from './components/userInfo/UserInfo';
import Defusion from './components/processes/defusion/Defusion';
import Breathing from './components/processes/present/Breathing';
import CardSort from './components/processes/values/CardSort';
import GoalSetting from './components/processes/commitment/GoalSetting';
import ObservingSelf from './components/processes/self/ObservingSelf';
import LabelThoughts from './components/processes/defusion/LabelThoughts';
import Survey from './components/processes/acceptance/Survey';
import AllExercises from './components/processes/AllExercises';
import Footer from './components/footer/Footer';
import NavbarHandler from './components/navbar/NavbarHandler';
import JournalPage from './components/journal/JournalPage';
import Post from './components/journal/Post';

const LayOut = () => {

  const { mode } = useSelector((state) => state.theme);

  return (
    <>
      <div className='app' id={mode}>
        <NavbarHandler />
          <Outlet />
        <Footer />
      </div>
    </>
  )
}

function App() {

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: '/',
          element: <Landing />
        },
        {
          path: "/about",
          element:  <About />
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
          path: "/about",
          element:  <About />
        },
        {
          path: "/processes",
          element: <Processes />
        },
        {
          path: "/processes/present",
          element: <Present />,
        },
        {
          path: "/processes/present/breathing",
          element: <Breathing />
        },
        {
          path: "/processes/values",
          element: <Values />
        },
        {
          path: "/processes/values/card-sort",
          element: <CardSort />
        },
        {
          path: "/processes/commitment",
          element: <Commitment />
        },
        {
          path: "/processes/commitment/goal-setting",
          element: <GoalSetting />
        },
        {
          path: "/processes/self",
          element: <Self />
        },
        {
          path: "/processes/self/the-observing-self",
          element: <ObservingSelf />
        },
        {
          path: "/processes/defusion",
          element: <Defusion />
        },
        {
          path: '/processes/defusion/label-thoughts',
          element: <LabelThoughts />
        },
        {
          path: "/processes/acceptance",
          element: <Acceptance />
        },
        {
          path: '/processes/acceptance/acceptance-survey',
          element: <Survey />
        },
        {
          path: "/user-info",
          element: <UserInfo />
        },
        {
          path: '/exercises',
          element: <AllExercises />
        },
        {
          path: '/journal',
          element: <JournalPage />
        },
        {
          path: '/journal/post/:id',
          element: <Post />
        }
      ]
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
