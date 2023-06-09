import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItem = <div className='md:space-x-8 space-y-3 md:space-y-0 pb-2 mb:pb-0 md:flex'>
        <p className='text-lg'><NavLink className={({isActive}) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500':''} to='/'>Home</NavLink></p>
        <p className='text-lg'><NavLink className={({isActive}) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500':''} to='/instructor'>Instructors</NavLink></p>
        <p className='text-lg'><NavLink className={({isActive}) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500':''} to='/classes'>Classes</NavLink></p>
        <p className='text-lg'><NavLink className={({isActive}) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500':''} to='/dashboard'>Dashboard</NavLink></p>
        <p className='text-lg'><NavLink className={({isActive}) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500':''} to='/login'>Login</NavLink></p>
        
       
        
    </div>
    return (
        <div className='fixed font-semibold pt-4 w-full z-10 bg-transparent'>
            <div className="navbar container p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 md:flex items-center">
                            {navItem}
                        </ul>
                    </div>
                    <Link className="text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;