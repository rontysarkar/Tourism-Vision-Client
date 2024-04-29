import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllTouristesSpot from "../Pages/AllTouristesSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Pages/MyList";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import ViewDetails from "../components/ViewDetails";
import UpdateData from "../Pages/UpdateData";
import PrivetRoutes from "./PrivetRoutes";
import ErrorPage from "../Pages/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
       
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristesSpot />,
        loader: ()=> fetch('http://localhost:5000/tourists')

      },
      {
        path: '/addTouristsSpot',
        element: <PrivetRoutes><AddTouristsSpot /></PrivetRoutes>
      },
      {
        path: '/myList',
        element: <PrivetRoutes><MyList /></PrivetRoutes>
      },
      {
        path: '/login',
        element: <LogIn/>

      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path:'/spot/:id',
        element:<PrivetRoutes><ViewDetails/></PrivetRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/tourists/${params.id}`)
      },
      {
        path:'/updateData/:id',
        element:<PrivetRoutes><UpdateData/></PrivetRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/tourists/${params.id}`)
      }
    ]
  },
]);