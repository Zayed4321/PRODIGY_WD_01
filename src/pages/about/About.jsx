import React from 'react'
import Layout from '../../components/layouts/Layout';
import img1 from "../../assets/container2.webp";
import { useCom } from '../../context/ComContext';

const About = () => {

    const [comName] = useCom();

    return (
        <Layout title={`${comName}-About US`} >
            <div className='w-full' >
                {/* Image Banner */}
                <div >
                    <img src={img1} className='w-full h-[500px] object-cover' alt="Sorry" />

                    {/* About Us Main Banner */}
                    <div className='mt-10 mb-20 max-w-screen-xl mx-auto' >
                        <h1 className='text-gray-300 font-display font-extrabold text-[80px] tracking-wide hover:text-white transition duration-300 text-center px-5 sm:px-0' > About Us </h1>
                        <p className='mt-7 text-gray-200 font-display font-medium text-xl tracking-wide text-center leading-10 px-5 sm:px-0' >
                            Welcome to {comName}, where we believe in crafting timeless homes with unmatched quality. Our passion lies in creating bespoke residences that are not only beautiful but also enduring, designed to stand the test of time and become cherished family heirlooms. We approach every project with the care and precision of master artisans. We understand that a home is more than just a building; it is a sanctuary, a place where memories are made and passed down through generations. This philosophy guides us in every step of the design and construction process. <br /><br />

                            Our commitment to superior craftsmanship sets us apart. Each home we build is a testament to meticulous attention to detail and the highest standards of construction. From the foundation to the final finishes, we use only the finest materials to ensure that our homes are as durable as they are beautiful. Our skilled artisans and builders work tirelessly to create custom features that reflect the unique vision and lifestyle of our clients.We blend classic design elements with modern functionality to create spaces that are both elegant and practical. Our homes are designed to be timeless, seamlessly integrating into their surroundings while offering contemporary comfort and convenience. We strive to create homes that maintain their beauty and value over time, becoming cherished parts of your family's legacy. <br /><br /></p>
                    </div>
                </div>

                {/* Mission and Vision Section */}
                <div className='py-28 bg-gray-300' >
                    <div className='max-w-screen-xl mx-auto' >
                        <div className='flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 sm:space-x-5 px-5 sm:px-0' >
                            <h1 className='text-gray-800 sm:w-[30%] font-display font-extrabold text-[50px] tracking-wide hover:text-white transition duration-300 text-center' > Our Mission </h1>
                            <p className='mt-7 text-gray-700 sm:w-[70%] font-display font-medium text-xl tracking-wide text-center leading-10' >
                                At {comName}, our mission is to craft bespoke, timeless homes with unparalleled quality. We are dedicated to transforming our clients' visions into reality through meticulous attention to detail, superior craftsmanship, and a commitment to using the finest materials. Our goal is to create enduring homes that become cherished family heirlooms, providing exceptional value and lasting beauty.
                            </p>
                        </div>
                        <div className='w-full border-b border-black mt-10 mb-10' > </div>
                        <div className='flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 sm:space-x-5 px-5 sm:px-0'>
                            <h1 className='text-gray-800 sm:w-[30%] font-display font-extrabold text-[50px] tracking-wide hover:text-white transition duration-300 text-center' > Our Vision </h1>
                            <p className='mt-7 text-gray-700 sm:w-[70%] font-display font-medium text-xl tracking-wide text-center leading-10' >
                                Our vision is to be the leading provider of custom-built homes that seamlessly blend classic design with modern functionality. We aspire to set the standard for quality and excellence in the home-building industry, known for our dedication to client satisfaction and our ability to create homes that stand the test of time. By continually innovating and upholding the highest standards of craftsmanship, we aim to build a legacy of homes that are not just structures, but treasured parts of our clients' lives and heritage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About