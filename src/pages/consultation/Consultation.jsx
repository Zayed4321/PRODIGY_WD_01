import React from 'react';
import Layout from '../../components/layouts/Layout';
import img1 from "../../assets/container2.webp";
import { useCom } from '../../context/ComContext';

const Consultation = () => {

    const [comName] = useCom();

    return (
        <Layout title={`${comName}-Consultations`} >
            <div className='w-full pb-20' >
                {/* Image Banner */}
                <div >
                    <img src={img1} className='w-full h-[500px] object-cover' alt="Sorry" />

                    {/* About Us Main Banner */}
                    <div className='mt-20 mb-20 max-w-screen-2xl mx-auto' >
                        <h1 className='text-gray-300 font-display font-extrabold text-[40px] sm:text-[80px] tracking-wide hover:text-white transition duration-300 text-center mx-5 sm:mx-0' > Consultation & Evaluation </h1>
                        <p className='mt-7 text-gray-200 font-display font-medium text-lg sm:text-xl tracking-wide text-center leading-loose mx-5 sm:mx-0' > At {comName}, our Consultation and Evaluation service provides personalized guidance to help you realize your dream home.

                            We start with a detailed consultation to understand your ideas, preferences, and goals. Our experienced team offers expert advice on design, materials, budget, and timeline.

                            Next, we conduct a comprehensive evaluation of your project requirements and site conditions, ensuring feasibility and compliance with local building codes.

                            Based on our findings, we provide tailored recommendations and a detailed project plan. Our transparent communication ensures you're informed and confident every step of the way.

                            Contact us today to begin your home-building journey with a personalized consultation and evaluation. </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Consultation