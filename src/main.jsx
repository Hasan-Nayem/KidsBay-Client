import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './providers/AuthProvider';
import Loader from './Components/Loader/Loader';
import Blog from './Components/Blog/Blog';
import AddToy from './Components/AddToy/AddToy';
import MyToy from './Components/MyToy/MyToy';
import AllToy from './Components/AllToy/AllToy';
import PrivateRoutes from './routes/PrivateRoutes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/add-toy",
        element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>,
      },
      {
        path: "/my-toy",
        element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>,
      },
      {
        path: "/all-toys",
        element: <AllToy></AllToy>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ]
  },
  {
    path :"/loader",
    element: <Loader></Loader>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
