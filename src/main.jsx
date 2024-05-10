import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Components/Authprovider/AuthProvider.jsx';
import AvailableFood from './Components/AvailableFood/AvailableFood.jsx';
import AddFood from './Components/AddFood/AddFood.jsx';
import MyfoodRequest from './Components/MyFoodRequest/MyfoodRequest.jsx';
import ManageFoods from './Components/ManageFoods/ManageFoods.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/availableFood',
        element: <AvailableFood></AvailableFood>
      },
      {
        path: '/addFood',
        element: <AddFood></AddFood>
      },
      {
        path: '/MyRequest',
        element: <MyfoodRequest></MyfoodRequest>
      },
      {
        path: '/manageMyFoods',
        element: <ManageFoods></ManageFoods>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
