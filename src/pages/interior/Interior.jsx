import React from 'react';
import Layout from '../../components/layouts/Layout';
import img1 from "../../assets/container2.webp";
import { useCom } from '../../context/ComContext';

const Interior = () => {

    const [comName] = useCom();

    return (
        <Layout title={`${comName}-Interior`} >
            <div className='w-full pb-20' >
                {/* Image Banner */}
                <div >
                    <img src={img1} className='w-full h-[500px] object-cover' alt="Sorry" />

                    {/* About Us Main Banner */}
                    <div className='mt-20 mb-20 max-w-screen-2xl mx-auto' >
                        <h1 className='text-gray-300 font-display font-extrabold text-[40px] sm:text-[80px] tracking-wide hover:text-white transition duration-300 text-center mx-5 sm:mx-0' > Interior Planning </h1>
                        <p className='mt-7 text-gray-200 font-display font-medium text-lg sm:text-xl tracking-wide text-center leading-loose mx-5 sm:mx-0' > At {comName}, our Interior Planning service ensures that every space in your home is both functional and beautiful. We work closely with you to design personalized layouts that reflect your style and maximize space. From selecting color palettes to choosing high-quality furnishings, our attention to detail ensures every element complements your home’s overall design. Let us help you create a cohesive and inviting living environment that truly feels like home. </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Interior