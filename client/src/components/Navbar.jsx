import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
// import { useAuth } from '../Authcontext/AuthContext'


const Navbar = () => {
  // const  [authUser, setAuthUser] = useAuth()

  let Navitems = (<>
    <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="/course">course</Link>
    </li>
    <li>
      <Link to="/contact">contact</Link>
    </li>
    <li>
      <Link to="/about">about</Link>
    </li>
  </>)

  return (


    <div className=' max-w-screen-2xl container mx-auto w-100 md:px-20 px-6  '>


      <div className="navbar bg-base-100 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {Navitems}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">AlFahad</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1"> {Navitems} </ul>
          </div>

          <div className='hidden md:block'>
            <label className="px-3 py-2 border rounded-md flex items-center gap-2 ">
              <input type="text" className="grow outline-none bg-transparent " placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
          </div>



          {

            !localStorage.User ?
              <div className=" mx-3">
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
              :
              (<Logout />)


          }









        </div>


      </div>
    </div>
  )
}

export default Navbar