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
import Blog from './Components/Blog/Blog';
import AddToy from './Components/AddToy/AddToy';
import MyToy from './Components/MyToy/MyToy';
import AllToy from './Components/AllToy/AllToy';
import PrivateRoutes from './routes/PrivateRoutes';
import Update from './Components/Update/Update';
import Error from './Components/Error/Error';
import Toy from './Components/Toy/Toy';
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
        path: "/my-toy/:id",
        loader: ({params})=> fetch(`https://p-hero-assignment11.vercel.app/my-toy/${params.id}`),
        element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>,
      },
      {
        path: '/update-toy/:id',
        loader: ({params})=> fetch(`https://p-hero-assignment11.vercel.app/toy/${params.id}`),
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
      },
      {
        path: "/all-toys",
        loader: () => fetch(`https://p-hero-assignment11.vercel.app/allToys`),
        element: <AllToy></AllToy>
      },
      {
        path: '/toy/:id',
        loader: ({params}) => fetch(`https://p-hero-assignment11.vercel.app/getToy/${params.id}`),
        element: <PrivateRoutes><Toy></Toy></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ],
    errorElement : <Error />,
    
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
