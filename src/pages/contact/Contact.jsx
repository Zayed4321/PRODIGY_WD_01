import React from 'react'
import Layout from '../../components/layouts/Layout'
import img1 from "../../assets/container2.webp";
import { useCom } from '../../context/ComContext';


const Contact = () => {

    const [comName] = useCom();

    return (
        <Layout title={`${comName}-Contact US`} >
            <div className='w-full' >
                {/* Image Banner */}
                <div >
                    <img src={img1} className='w-full h-[500px] object-cover' alt="Sorry" />

                    {/* About Us Main Banner */}
                    <div className='mt-10 pb-28 sm:pb-0 sm:mb-20 max-w-screen-2xl mx-auto' >
                        <h1 className='text-gray-300 font-display font-extrabold text-[40px] sm:text-[80px] tracking-wide hover:text-white transition duration-300 text-center mx-5 sm:mx-0' > Become Our Customer </h1>
                        <p className='mt-7 text-gray-200 font-display font-medium text-lg sm:text-xl tracking-wide text-center leading-10 mx-5 sm:mx-0' > We'd love to hear from you! Whether you're interested in starting a new project, have questions about our services, or simply want to learn more about {comName}, we're here to help.

                            Reach out to us via phone, email, or by filling out the contact form below. One of our dedicated team members will get back to you as soon as possible. </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact