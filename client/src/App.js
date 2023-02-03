import './index.css';
import { useState, createContext, useEffect } from 'react';
import { 
  createBrowserRouter, 
  RouterProvider,
  BrowserRouter as Router,
  Outlet
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

  const dispatch = useDispatch();
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

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
    fetchUser();
  }, [children])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )

}

export { UserContext, UserContextProvider }

function App() {

  const [user, setUser] = useState(null);

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
          path: "/services",
          element: <Services />
        },
        {
          path: "/login",
          element: <Login setUser={setUser} />
        },
        {
          path: "/register",
          element: <Register setUser={setUser} />
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
        path: "/about",
        element:  <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/login",
        element: <Login setUser={setUser} />
      },
      {
        path: "/register",
        element: <Register setUser={setUser} />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
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
        path: "/events",
        element: <Events />
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
      {/* <UserContext.Provider value={JSON.parse(localStorage.getItem('user'))}>

      </UserContext.Provider> */}
      <UserContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </UserContextProvider>
     
    </>
  );
}

export default App;
