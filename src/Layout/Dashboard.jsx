import React from 'react';
import { FaCalendarAlt, FaHamburger, FaHome, FaPizzaSlice, FaSchool, FaShoppingCart, FaStreetView,FaAddressBook, FaUserAlt, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import {SiGoogleclassroom} from 'react-icons/si'
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {

  // TODO: isAdmin
  const isAdmin = true;
  const isInstructor = false;
  const isStudent = false
  return (

    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-auto md:w-[900px] ">
        
        {/* Page content here */}
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-rose-300">
          {/* Sidebar content here */}
          {
            isAdmin && <><li><NavLink to={'/dashboard/home'}><FaAddressBook />Admin Home </NavLink></li>
              <li><NavLink to={'/dashboard/manageclasses'}><FaSchool/> Manage Classes </NavLink></li>
              <li><NavLink to={'/dashboard/manageusers'}><FaUserAlt/> Manage Users</NavLink></li></>
          }
          {
            isStudent && <><li><NavLink to={'/dashboard/home'}><FaHome /> Home </NavLink></li>
              <li><NavLink to={'/dashboard/reservation'}><FaCalendarAlt /> My Selected Classes </NavLink></li>
              <li><NavLink to={'/dashboard/reservation'}><FaCalendarAlt /> My Enrolled Classes </NavLink></li>
              <li><NavLink to={'/dashboard/paymentHistory'}><FaWallet /> Payment </NavLink></li></>
          }
          {
            isInstructor && <><li><NavLink to={'/dashboard/home'}><FaHome /> Home </NavLink></li>
              <li><NavLink to={'/dashboard/reservation'}><FaSchool/> Add a Class </NavLink></li>
              <li><NavLink to={'/dashboard/paymentHistory'}><FaSchool/> My Classed</NavLink></li>
              <li><NavLink to={'/dashboard/paymentHistory'}><FaStreetView/> Feedback</NavLink></li></>
          }


          <div className="divider"></div>
          <li className='hover:text-orange-500 transition-all duration-100'><NavLink to={'/'}><FaHome /> Home</NavLink></li>
          <li className='hover:text-orange-500 transition-all duration-100'><NavLink to={'/classes'}><SiGoogleclassroom/> Classes</NavLink></li>

        </ul>

      </div>
    </div>

  );
};

export default Dashboard;