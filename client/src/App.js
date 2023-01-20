import './index.css';
import { useState, createContext, useContext, useEffect } from 'react';
import { 
  createBrowserRouter, 
  RouterProvider,
  useNavigate,
  BrowserRouter as Router,
  Routes,
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
import Acceptance from './components/processes/acceptance/Acceptance';
import UserInfo from './components/userInfo/UserInfo';
import Defusion from './components/processes/defusion/Defusion';
import FullNavbar from './components/navbar/FullNavbar';
import Breathing from './components/processes/present/Breathing';
import CardSort from './components/processes/values/CardSort';
import GoalSetting from './components/processes/commitment/GoalSetting';
import ObservingSelf from './components/processes/self/ObservingSelf';
import LabelThoughts from './components/processes/defusion/LabelThoughts';
import Survey from './components/processes/acceptance/Survey';
import ExercisesCard from './components/dashboard/cards/ExercisesCard';
import AllExercises from './components/processes/AllExercises';
import Footer from './components/footer/Footer';
import Sidebar from './components/navbar/Sidebar'

const fakeUserData = {
  id: '123',
  name: 'john',
  email: 'john@mail.com',
  password: '123'
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
      path: "/dashboard/processes/present",
      element: <Present />,
    },
    {
      path: "/dashboard/processes/present/breathing",
      element: <Breathing />
    },
    {
      path: "/dashboard/processes/values",
      element: <Values />
    },
    {
      path: "/dashboard/processes/values/card-sort",
      element: <CardSort />
    },
    {
      path: "/dashboard/processes/commitment",
      element: <Commitment />
    },
    {
      path: "/dashboard/processes/commitment/goal-setting",
      element: <GoalSetting />
    },
    {
      path: "/dashboard/processes/self",
      element: <Self />
    },
    {
      path: "/dashboard/processes/self/the-observing-self",
      element: <ObservingSelf />
    },
    {
      path: "/dashboard/processes/defusion",
      element: <Defusion />
    },
    {
      path: '/dashboard/processes/defusion/label-thoughts',
      element: <LabelThoughts />
    },
    {
      path: "/dashboard/processes/acceptance",
      element: <Acceptance />
    },
    {
      path: '/dashboard/processes/acceptance/acceptance-survey',
      element: <Survey />
    },
    {
      path: "/dashboard/events",
      element: <Events />
    },
    {
      path: "/dashboard/user-info",
      element: <UserInfo />
    },
    {
      path: '/dashboard/exercises',
      element: <AllExercises />
    }
  
  ])

  return (

    <>
      {/* <UserContext.Provider value={JSON.parse(localStorage.getItem('user'))}>

      </UserContext.Provider> */}
      <UserContextProvider>
        {/* <FullNavbar user={ user ? true : false} /> */}
        {/* <RouterProvider router={router} /> */}
        <Router>
          
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/processes' element={<Processes />} />
            <Route path='/processes/present' element={<Present />} />
            <Route path='/processes/present/breathing' element={<Breathing />} />
            <Route path='/processes/values' element={<Values />} />
            <Route path='/processes/values/card-sort' element={<CardSort />} />
            <Route path='/processes/commitment' element={<Commitment />} />
            <Route path='/processes/commitment/goal-setting' element={<GoalSetting />} />
            <Route path='/processes/self' element={<Self />} />
            <Route path='/processes/self/the-observing-self' element={<ObservingSelf />} />
            <Route path='/processes/defusion' element={<Defusion />} />
            <Route path='/processes/defusion/label-thoughts' element={<LabelThoughts />} />
            <Route path='/processes/acceptance' element={<Acceptance />} />
            <Route path='/processes/acceptance/acceptance-survey' element={<Survey />} />
            <Route path='/exercises' element={<AllExercises />} />
          </Routes>
        </Router>
        <ToastContainer />
      </UserContextProvider>
     
    </>
  );
}

export default App;
