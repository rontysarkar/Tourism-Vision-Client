import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
  const {user,LogOut} = useContext(AuthContext)
  console.log(user)
  const allLinks = (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary border-b-4  border-primary font-bold  "
            : "hover:text-primary font-bold"
        }
        to={"/"}
      >
        <li>
          <span>Home</span>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary border-b-4  border-primary font-bold  "
            : "hover:text-primary font-bold"
        }
        to={"/allTouristsSpot"}
      >
        <li>
          <span>All Tourists Spot</span>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary border-b-4  border-primary font-bold  "
            : "hover:text-primary font-bold"
        }
        to={"/addTouristsSpot"}
      >
        <li>
          <span>Add Tourists Spot</span>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary border-b-4  border-primary font-bold  "
            : "hover:text-primary font-bold"
        }
        to={"/myList"}
      >
        <li>
          <span>My List</span>
        </li>
      </NavLink>
      
    </>
  
  );

  const handleLogOut = ()=>{
    LogOut()
    .then(()=>{
      console.log('logout')
    })
  }



  return (
    <div className="navbar bg-white shadow-lg  2xl:px-32">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {allLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-days ">Tourism Vision</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{allLinks}</ul>
      </div>
      <div className="navbar-end space-x-4  ">
        {/* <Link to={'/login'} className="btn">Login</Link> */}
        {/* <Link to={'register'} className="btn">Register</Link> */}
        {
          user ? <div className=" relative group  ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm z-10  absolute right-12 -bottom-16 mt-3  p-2 shadow bg-base-100 rounded-box w-52 hidden group-hover:block "
          >
            <li className=" py-4   text-center font-bold">
              {user.displayName}
            </li>
            <li  onClick={handleLogOut}>
              <button className="bg-primary text-center w-22 px-6 mx-auto text-white ">Logout</button>
            </li>
          </ul>
        </div> : <Link to={'/login'}><button className="w-24 px-6 bg-primary text-white py-1 rounded-sm">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
