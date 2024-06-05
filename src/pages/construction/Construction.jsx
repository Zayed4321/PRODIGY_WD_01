import React from 'react';
import Layout from '../../components/layouts/Layout';
import img1 from "../../assets/container2.webp";
import { useCom } from '../../context/ComContext';

const Construction = () => {

    const [comName] = useCom();

    return (
        <Layout title={`${comName}-Construction`} >
            <div className='w-full pb-20' >
                {/* Image Banner */}
                <div >
                    <img src={img1} className='w-full h-[500px] object-cover' alt="Sorry" />

                    {/* About Us Main Banner */}
                    <div className='mt-20 mb-20 max-w-screen-2xl mx-auto' >
                        <h1 className='text-gray-300 font-display font-extrabold text-[40px] sm:text-[80px] tracking-wide hover:text-white transition duration-300 text-center mx-5 sm:mx-0' > Design & Construction </h1>
                        <p className='mt-7 text-gray-200 font-display font-medium text-lg sm:text-xl tracking-wide text-center leading-loose mx-5 sm:mx-0' > Our design process begins with a deep understanding of your needs and style preferences. Our skilled architects and designers collaborate with you to create a custom design that reflects your unique taste and lifestyle. We use the latest design tools and techniques to develop detailed plans and 3D renderings, ensuring you have a clear vision of the final product. From floor plans to interior finishes, every detail is carefully considered and tailored to your specifications. <br /><br />

                            Once the design is finalized, our expert construction team takes over to turn your dream into reality. We pride ourselves on using high-quality materials and employing skilled craftsmen to ensure exceptional workmanship. Throughout the construction process, we maintain open communication and keep you updated on progress. Our commitment to quality and attention to detail ensures that every aspect of your home is built to the highest standards. <br /><br />

                            With {comName}, you can trust that your home will be designed and constructed with care, precision, and a commitment to excellence. Let us help you create a space that is both beautiful and enduring.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Construction