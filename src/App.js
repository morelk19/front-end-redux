import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout';
import LogIn from './components/Login';
import Register from './components/Register';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
    },
    {
      path: '/login',
      element: <LogIn/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;