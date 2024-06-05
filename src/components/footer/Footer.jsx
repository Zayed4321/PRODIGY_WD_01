import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useCom } from '../../context/ComContext';

const Footer = () => {

    const [comName] = useCom();

    return (
        <div>
            <div className='bg-gray-300 py-28' >
                <div className=' max-w-screen-2xl mx-auto' >
                    <div className='flex flex-col sm:flex-row items-center justify-center' >
                        <div className='sm:w-[40%]' >
                            <h1 className='text-gray-800 font-display font-extrabold text-[80px] tracking-wide hover:text-white transition duration-300 text-center sm:text-start'> Get A Quote </h1>
                            <p className='text-gray-700 font-display font-medium text-sm mt-10 px-5 sm:px-0 text-center' > If you're interested in getting custom blueprints for your Container Home, simply share your project details, and we will provide you with a personalised quote tailored to your specific needs. </p>
                        </div>
                        <div className='sm:w-[60%] sm:ml-10 mt-5 sm:mt-0' >
                            <div> <h1 className='text-gray-700 font-display font-medium text-lg mb-10' > Please Fill Up the Form to get a quote </h1> </div>
                            <form>
                                <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-5' >
                                    <div className='sm:w-[50%]' >
                                        <label className="input input-bordered flex items-center gap-2">
                                            Name
                                            <input type="text" className="grow" placeholder="Bradley" />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 mt-3 sm:mt-10">
                                            Email
                                            <input type="text" className="grow" placeholder="example@containersnearme.com" />
                                        </label>
                                    </div>
                                    <div className='sm:w-[50%] mt-3 sm:mt-0' >
                                        <textarea className="textarea textarea-bordered w-full h-16" placeholder="Project Details"></textarea>
                                        <div className='py-3 px-5 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-500 transition duration-300 mt-3 text-center cursor-pointer'>
                                            <Link className='' > Submit </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-gray-800 text-gray-300' ><footer className="footer footer-center p-10 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover text-gray-300">About us</a>
                    <a className="link link-hover text-gray-300">Contact</a>
                    <a className="link link-hover text-gray-300">Projects</a>
                    <a className="link link-hover text-gray-300">Home</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-8">
                        <div><FaFacebookF className='text-white text-2xl font-display' /></div>
                        <div><FaInstagram className='text-white text-2xl font-display' /></div>
                        <div><FaLinkedinIn className='text-white text-2xl font-display' /></div>
                    </div>
                </nav>
                <aside>
                    <p className='text-gray-300 font-display font-medium text-lg' >Copyright © 2024 - All right reserved by {comName}</p>
                </aside>
            </footer></div>
        </div>
    )
}

export default Footer