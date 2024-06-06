import React from 'react'
import Layout from '../../components/layouts/Layout'
import img1 from "../../assets/container2.webp";
import main1 from "../../assets/main1.webp";
import main2 from "../../assets/main2.webp";
import main3 from "../../assets/main3.webp";
import main4 from "../../assets/main4.webp";
import { useCom } from '../../context/ComContext';


const Projects = () => {

    const [comName] = useCom();

    return (
        <Layout title={`${comName} - Projects`} >
            <div className='w-full' >
                {/* Image Banner */}
                <div >
                    <img src={img1} className='w-full h-[500px] object-cover' alt="Sorry" />

                </div>

                {/* Mission and Vision Section */}
                <div className='pt-28 bg-gray-300' >
                    {/* Projects Main Banner */}
                    <div className='max-w-screen-2xl mx-auto' >
                        <h1 className='text-gray-800 font-display font-extrabold text-[80px] tracking-wide hover:text-white transition duration-300 text-center mb-32' > Our Projects </h1>
                        <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 px-5 sm:px-0 justify-center items-center' >
                            <img src={main1} className='sm:h-[500px] sm:w-[50%] object-cover' alt="This is our recent projects" />
                            <div className='sm:w-[5%]' ></div>
                            <div className='sm:w-[45%]'>
                                <h4 className='text-center text-2xl font-bold mb-5' > Exterior View </h4>
                                <p className='text-xl tracking-wide leading-10 text-center font-display font-medium text-gray-700' > The exterior of The Modern Rustic Retreat is a testament to its rustic charm. The home is framed with reclaimed wood beams and stone accents, providing a warm and inviting appearance that seamlessly blends into the natural landscape. The use of natural materials ensures the home ages gracefully, enhancing its beauty over time. Large, strategically placed windows not only offer breathtaking views of the surrounding countryside but also flood the interior with natural light, creating a seamless connection between the indoors and outdoors. </p>
                            </div>
                        </div>
                        <div className='flex flex-col-reverse sm:flex-row space-y-5 sm:space-y-0 px-5 sm:px-0 justify-center items-center mt-36' >
                            <div className='sm:w-[45%]'>
                                <h4 className='text-center text-2xl font-bold mb-5' > Outdoor Living </h4>
                                <p className='text-xl tracking-wide leading-10 text-center font-display font-medium text-gray-700' >The outdoor living space is designed to be an extension of the home's interior. A spacious deck provides an ideal spot for entertaining, with comfortable seating areas, a built-in barbecue, and a dining table for al fresco meals. The use of natural stone and wood continues here, ensuring the outdoor space feels like a seamless part of the home. Surrounding the deck, beautifully landscaped gardens blend with the natural surroundings, creating a peaceful oasis for relaxation and enjoyment.</p>
                            </div>
                            <div className='sm:w-[5%]' ></div>
                            <img src={main2} className='sm:h-[500px] sm:w-[50%] object-cover' alt="This is our recent projects" />
                        </div>
                        <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 px-5 sm:px-0 justify-center items-center mt-36' >
                            <img src={main3} className='sm:h-[500px] sm:w-[50%] object-cover' alt="This is our recent projects" />
                            <div className='sm:w-[5%]' ></div>
                            <div className='sm:w-[45%]'>
                                <p className='text-xl tracking-wide leading-10 text-center font-display font-medium text-gray-700' >The roofline of the retreat is another distinctive feature. Designed with a mix of traditional gabled and modern flat sections, it enhances the home's visual appeal and provides practical benefits such as efficient water drainage and additional space for solar panels. The use of natural materials extends to the roof, where cedar shingles add to the rustic charm while ensuring weather resistance.</p>
                            </div>
                        </div>
                        <div className='flex flex-col-reverse sm:flex-row space-y-5 sm:space-y-0 px-5 sm:px-0 justify-center items-center mt-36' >
                            <div className='sm:w-[45%]'>
                                <p className='text-xl tracking-wide leading-10 text-center font-display font-medium text-gray-700' >

                                    Landscaping around the exterior is meticulously planned to complement the home's rustic design. Native plants and trees are strategically placed to blend with the natural environment, providing privacy and enhancing the overall aesthetic. Stone pathways and rustic outdoor lighting guide visitors to the entrance, creating a welcoming atmosphere from the moment they arrive.</p>
                            </div>
                            <div className='sm:w-[5%]' ></div>
                            <img src={main4} className='sm:h-[500px] sm:w-[50%] object-cover' alt="This is our recent projects" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects