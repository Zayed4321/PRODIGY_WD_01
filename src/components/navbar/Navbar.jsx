import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCom } from '../../context/ComContext';

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 1);  // Sticky when scrolled past initial position
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [comName] = useCom();

    return (
        <div className={isSticky ? 'bg-gradient-to-br from-gray-800 to-gray-900 fixed top-0 left-0 right-0 z-50 shadow-md transition-all ease-in-out duration-300' : 'bg-gradient-to-br from-gray-800 to-gray-900'}>
            <div className='py-10 px-10 max-w-screen-2xl mx-auto' >
                <div className="navbar rounded-full bg-gray-300 pr-10 py-5 pl-7">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className='font-display text-md font-medium' >Services</Link>
                                    <ul className="pl-5 flex flex-col space-y-3">
                                        <NavLink to="/consultation" className='text-md font-bold font-display text-center'>Consultation</NavLink>
                                        <NavLink to="/construction" className='text-md font-bold font-display text-center'>Construction</NavLink>
                                        <NavLink to="/interior" className='text-md font-bold font-display text-center'>Interior</NavLink>
                                    </ul>

                                </li>
                                <li><Link to={"/projects"} className='font-display text-md font-medium' >Projects</Link></li>
                                <li><Link to={"/homes"} className='font-display text-md font-medium' >Products</Link></li>
                                <li><Link to={"/about"} className='font-display text-md font-medium' >About us</Link></li>
                                <li><Link to={"/contact"} className='font-display text-md font-medium' >Contact us</Link></li>
                            </ul>
                        </div>
                        <Link to={"/"} className='text-3xl font-display font-bold text-center ml-10 text-gray-800' > {comName} </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to={"/about"} className='font-display text-lg font-medium pr-5 ml-3' >About us</Link></li>
                            <li className='ml-5' >
                                <details>
                                    <summary><Link className='font-display text-lg font-medium' >Services</Link></summary>
                                    <ul className="pl-5 flex flex-col space-y-3">
                                        <NavLink to="/consultation" className='text-md font-bold font-display text-center'>Consultation</NavLink>
                                        <NavLink to="/construction" className='text-md font-bold font-display text-center'>Construction</NavLink>
                                        <NavLink to="/interior" className='text-md font-bold font-display text-center'>Interior</NavLink>
                                    </ul>
                                </details>
                            </li>
                            <li><Link to={"/projects"} className='font-display text-lg font-medium pr-5 ml-3' >Projects</Link></li>
                            <li><Link to={"/homes"} className='font-display text-lg font-medium pr-5 ml-3' >Products</Link></li>
                            <li><Link to={"/contact"} className='font-display text-lg font-medium ml-3' >Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end hidden sm:flex">
                        <a href="#be-our-customer" className="bg-gray-800 text-white font-bold py-3 px-5 rounded-full hover:bg-gray-500 transition duration-300 mr-8">+ Be Our Client</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar