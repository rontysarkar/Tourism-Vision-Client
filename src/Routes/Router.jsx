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



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
      },
      {
        path:'/spot/:id',
        element:<ViewDetails/>,
        loader: ({params})=> fetch(`http://localhost:5000/tourists/${params.id}`)
      },
      {
        path:'/updateData/:id',
        element:<UpdateData/>,
        loader: ({params})=> fetch(`http://localhost:5000/tourists/${params.id}`)
      }
    ]
  },
]);