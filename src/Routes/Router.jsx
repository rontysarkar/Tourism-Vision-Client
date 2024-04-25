import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllTouristesSpot from "../Pages/AllTouristesSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Pages/MyList";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristesSpot />

      },
      {
        path: '/addTouristsSpot',
        element: <AddTouristsSpot />
      },
      {
        path: '/myList',
        element: <MyList />
      },
      {
        path: '/login',
        element: <LogIn/>

      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);