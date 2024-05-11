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
import PrivateRoute from './Components/Private/PrivateRoute.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import UpdateProfile from './Components/UpdateUser/UpdateProfile.jsx';
import FoodDetails from './Components/FoodDetails/FoodDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('http://localhost:5000/featuredFood')
      },
      {
        path: '/availableFood',
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch('http://localhost:5000/featuredFood')
      },
      {
        path: '/addFood',
        element: <PrivateRoute> <AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/MyRequest',
        element: <PrivateRoute><MyfoodRequest></MyfoodRequest></PrivateRoute>,
        // loader: () =>fetch('http://localhost:5000/requestedFood')
      },
      {
        path: '/manageMyFoods',
        element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/availableFoodDetails/:id',
        element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/featuredFood/${params.id}`)
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
