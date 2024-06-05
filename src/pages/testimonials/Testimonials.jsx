import React from 'react'
import Layout from '../../components/layouts/Layout';
import img1 from "../../assets/container2.webp";


const Testimonials = () => {
    return (
        <Layout title={"Containers Near Me-About US"} >
            <div className='w-full' >
                {/* Image Banner */}
                <div >
                    <img src={img1} className='w-full h-[500px] object-cover' alt="Sorry" />

                    {/* About Us Main Banner */}
                    <div className='mt-10 mb-20 max-w-screen-2xl mx-auto' >
                        <h1 className='text-gray-300 font-display font-extrabold text-[80px] tracking-wide hover:text-white transition duration-300 text-center' > About Us </h1>
                        <p className='mt-7 text-gray-200 font-display font-medium text-xl tracking-wide text-center' > This is just for styling </p>
                    </div>
                </div>

                {/* Mission and Vision Section */}
                <div className='py-28 bg-gray-300' >

                </div>
            </div>
        </Layout>
    )
}

export default Testimonials