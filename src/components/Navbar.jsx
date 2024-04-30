import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../assets/images/logo.png"
import person from '../assets/images/person.png'

const Navbar = () => {
  const { user, LogOut, loading } = useContext(AuthContext)
  const [theme,setTheme] = useState('light')
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

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        console.log('logout')
      })
  }


  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

  const handleThemeToggle= (e) =>{
    if(e.target.checked){
      setTheme('synthwave')
    }
    else{
      setTheme('light')
    }
  }




  return (
    <div className="navbar shadow-lg  2xl:px-32">
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
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {allLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-14 text-primary " src={logo} alt="" />
          <a className="btn btn-ghost text-xl xl:text-3xl font-bold ">Tourism<span className="text-primary">Vision</span></a>
        </div>


      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{allLinks}</ul>
      </div>
      <div className="navbar-end space-x-4  ">
        {/* <Link to={'/login'} className="btn">Login</Link> */}
        {/* <Link to={'register'} className="btn">Register</Link> */}
        <label className="cursor-pointer grid place-items-center">
          <input  type="checkbox" onChange={handleThemeToggle} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
        {
          loading ? <span className="loading loading-ring loading-lg"></span> : user ? <div className=" relative group  ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border ">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL ? user.photoURL : person}
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
              <li onClick={handleLogOut}>
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
