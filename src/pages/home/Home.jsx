import React from 'react'
import Layout from '../../components/layouts/Layout';
import bannerimg from "../../assets/container_home.webp";
import service1 from "../../assets/consulting.webp";
import service2 from "../../assets/construction.webp";
import service3 from "../../assets/interior.webp";
import icon1 from "../../assets/icon1.webp";
import main1 from "../../assets/main1.webp";
import main2 from "../../assets/main2.webp";
import main3 from "../../assets/main3.webp";
import main4 from "../../assets/main4.webp";
import { Link } from 'react-router-dom';
import { useCom } from '../../context/ComContext';

const Home = () => {

    const [comName] = useCom();

    return (
        <Layout title={`${comName}`} >

            {/* Home Section for the Container Homes Page */}
            <div className='py-10 sm:max-w-screen-2xl sm:mx-auto px-10' >
                <div className='flex flex-col-reverse sm:flex-row sm:items-center sm:justify-center' >
                    <div className='sm:w-[30%] relative' >
                        <h1 className='text-gray-300 font-display font-bold text-4xl mt-10 mb-8 sm:mb-0' > Let's Get Started With </h1>
                        <div className='text-gray-300 font-display font-extrabold sm:hidden text-[30px] tracking-wide hover:text-white transition duration-300 mb-6'> {comName} </div>
                        <div className='sm:py-28' ></div>
                        <p className='text-white font-display font-medium text-md pr-2'>{comName}. Custom homes, crafted with distinction. We don't build houses, we build legacies.</p>
                        <div className='w-32 h-3 bg-gray-300 mt-10 rounded-md' ></div>
                    </div>
                    <div className='absolute bottom-48 left-10 sm:bottom-64 sm:left-52' >
                        <h1 className='text-gray-300 font-display font-extrabold text-[150px] hidden sm:flex tracking-wide hover:text-white transition duration-300' > {comName} </h1>
                    </div>
                    <div className='sm:w-[70%]' >
                        <img src={bannerimg} className='sm:max-w-[1000px] w-full' alt="Image of a Beautiful Container Home for Sell" />
                    </div>
                </div>
            </div>

            {/* About Us Section of Container Homes Website */}
            <div className='py-28 bg-gray-300' >
                <div className='flex flex-col sm:flex-row sm:max-w-screen-2xl sm:mx-auto flex-wrap' >
                    <div className='sm:w-[25%] text-gray-800 font-display font-extrabold text-[100px] tracking-wide hover:text-white transition duration-300 text-center sm:text-end' > <h1> What We Do </h1> </div>
                    <div className='sm:w-[10%]' > <div className='w-1 h-full bg-gray-800 mx-40' ></div> </div>
                    <div className='sm:w-[65%] flex flex-col items-center justify-center' >
                        <p className='px-5 sm:px-0 text-center sm:ml-20 font-display font-medium text-2xl' >At {comName}, we're not just building houses, we're crafting legacies. We're a small, passionate team led by Zayed, a builder dedicated to exceptional quality and personalized service. <br /> <br />

                            We specialize in custom homes, working closely with you to bring your vision to life. From the initial design to the final detail, we're committed to exceeding expectations and creating a home that reflects your unique style and stands the test of time.</p>
                        <div className='py-5 px-5 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-500 transition duration-300 mt-8 mb-3 text-center cursor-pointer' >
                            <Link to={"/about"} className={""} > Know More </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section of Our Project */}
            <div className='py-28 sm:max-w-screen-2xl max-w-[430px] sm:mx-auto' >
                <div>
                    <div>
                        <h1 className='text-gray-300 font-display font-extrabold text-[80px] tracking-wide hover:text-white transition duration-300 text-center' > Services We Offer </h1>
                        <h3 className='text-gray-200 font-display font-medium text-3xl tracking-wide text-center' > Crafting Your Dream Home </h3>
                    </div>
                    <div className='mt-20 flex flex-col sm:flex-row items-center justify-center space-y-10 sm:space-x-10'>
                        <div className="card w-[90%] sm:w-96 bg-gray-300 shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer">  {/* Added hover effect and transition for smooth scaling */}
                            <figure><img src={service1} className='w-full' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-gray-800">
                                    Consultation & Evaluation
                                </h2>
                                <p>We guide you through initial vision discussions, site assessments, and budget planning to set a strong foundation for your dream home.</p>
                                <div className="card-actions justify-end">
                                    <Link to={'/services'} className='py-2 px-2 bg-gray-800 text-gray-300 rounded-lg' > Find Out More </Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-[90%] sm:w-96 bg-gray-300 shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer">  {/* Added hover effect and transition for smooth scaling */}
                            <figure><img src={service2} className='w-full' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-gray-800">
                                    Design & Construction
                                </h2>
                                <p>We collaborate on design, utilize top-quality materials and meticulous construction, and provide seamless project management for a stress-free experience.</p>
                                <div className="card-actions justify-end">
                                    <Link to={'/services'} className='py-2 px-2 bg-gray-800 text-gray-300 rounded-lg' > Find Out More </Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-[90%] sm:w-96 bg-gray-300 shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer">  {/* Added hover effect and transition for smooth scaling */}
                            <figure><img src={service3} className='w-full' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-gray-800">
                                    Interior Planning (Optional)
                                </h2>
                                <p>Our expert designers help curate a personalized and beautiful interior space with thoughtful material selection, fostering lasting memories for generations.</p>
                                <div className="card-actions justify-end">
                                    <Link to={'/services'} className='py-2 px-2 bg-gray-800 text-gray-300 rounded-lg' > Find Out More </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Recent Projects Section of Our Homepage */}
            <div className='py-28 bg-gray-300'>
                <div className='sm:max-w-screen-2xl sm:mx-auto' >
                    <div className='flex flex-col sm:flex-row items-center justify-around px-5 sm:px-0' >
                        <h1 className='sm:w-[30%] text-gray-800 font-display font-extrabold text-[80px] tracking-wide hover:text-white transition duration-300 text-start' > Featured Projects </h1>
                        <div className='sm:w-[30%] hidden sm:flex items-center justify-center' >
                            <img src={icon1} className='w-36' alt="icon for construction images in USA" />
                        </div>
                        <p className='sm:w-[40%] flex items-center justify-center text-gray-800 font-medium font-display' >Witness a dream transformed into reality. This one-of-a-kind creation showcases the perfect blend of our client's vision and our meticulous building expertise. From initial sketches to the final finishing touches, embark on a journey through the creation of this exceptional home. Discover the {comName} difference.</p>
                    </div>
                    <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 mt-10 sm:mt-20 px-5 sm:px-0' >
                        <div className='sm:w-[70%]' >
                            <img src={main1} className='rounded-md h-[630px] w-[1000px] object-cover' alt="Recent Projects of Our Work and Task" />
                        </div>
                        <div className='sm:flex sm:flex-col sm:w-[30%]' >
                            <div> <img src={main2} className='rounded-md h-[200px] w-[600px] object-cover' alt="Recent Projects of Our Work and Task" /> </div>
                            <div> <img src={main3} className='rounded-md h-[200px] w-[600px] object-cover mt-4' alt="Recent Projects of Our Work and Task" /> </div>
                            <div> <img src={main4} className='rounded-md h-[200px] w-[600px] object-cover mt-4' alt="Recent Projects of Our Work and Task" /> </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 mt-10 sm:mt-20 px-5 sm:px-0' >
                        <div className='sm:w-[30%] flex flex-col items-center' >
                            <h1 className='font-display font-semibold text-2xl text-gray-800'> Lakeside Living Redefined: The Serenity Container Home </h1>
                            <h3 className='text-gray-800 font-display font-medium text-xl mt-3' > One Bedroom, Kitchen & Washroom </h3>
                            <div className='py-3 px-5 bg-gray-800 inline-block text-white font-bold rounded-lg hover:bg-gray-500 transition duration-300 mt-6 mb-3 text-center cursor-pointer'>
                                <Link className='' > View in Details </Link>
                            </div>
                        </div>
                        <div className='sm:w-[10%] sm:flex hidden' ></div>
                        <div className='sm:w-[60%]' >
                            <p className='font-display text-center font-medium text-xl text-gray-800 leading-8' > Nestled serenely beside a picturesque lake, The Serenity Container Home redefines lakeside living with innovative design and sustainable practices. This stunning home, crafted from repurposed shipping containers, offers a unique blend of modern aesthetics and eco-conscious construction. Our team meticulously transformed the containers into a luxurious and comfortable living space, complete with a thoughtfully designed interior that maximizes natural light and lake views. Explore this innovative project and discover the possibilities of container homes for your own lakeside retreat. </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process of Buying and Order for Our Homepage */}
            <div className='py-28 sm:max-w-screen-2xl sm:mx-auto' >
                <div className='flex flex-col' >
                    <div className='text-gray-300 font-display font-extrabold text-[80px] tracking-wide hover:text-white transition duration-300 text-center sm:text-start' >
                        <h1> Process of Buying </h1>
                    </div>
                    <div className='flex flex-col sm:flex-row mt-20 sm:space-x-10 px-5 sm:px-0 space-y-5 sm:space-y-0' >
                        <div className='sm:w-[30%] flex bg-gray-300 py-3 px-3 rounded-lg items-center justify-center' >
                            <h1 className='text-gray-800 font-display font-extrabold text-[100px] mx-5' > 1 </h1>
                            <div>
                                <h3 className='text-gray-700 font-display font-bold text-xl'> Discussing the Details </h3>
                                <p className='text-gray-700 font-display font-medium text-sm mt-5'> We are here to design the perfect container home for your family. Depending on your needs, we'll start with the conceptual designs and floor plan options. </p>
                            </div>
                        </div>
                        <div className='sm:w-[30%] flex bg-gray-300 py-3 px-3 rounded-lg items-center justify-center' >
                            <h1 className='text-gray-800 font-display font-extrabold text-[100px] mx-5' > 2 </h1>
                            <div>
                                <h3 className='text-gray-700 font-display font-bold text-xl'> Discussing the Details </h3>
                                <p className='text-gray-700 font-display font-medium text-sm mt-5'> We are here to design the perfect container home for your family. Depending on your needs, we'll start with the conceptual designs and floor plan options. </p>
                            </div>
                        </div>
                        <div className='sm:w-[30%] flex bg-gray-300 py-3 px-3 rounded-lg items-center justify-center' >
                            <h1 className='text-gray-800 font-display font-extrabold text-[100px] mx-5' > 3 </h1>
                            <div>
                                <h3 className='text-gray-700 font-display font-bold text-xl'> Discussing the Details </h3>
                                <p className='text-gray-700 font-display font-medium text-sm mt-5'> We are here to design the perfect container home for your family. Depending on your needs, we'll start with the conceptual designs and floor plan options. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Home