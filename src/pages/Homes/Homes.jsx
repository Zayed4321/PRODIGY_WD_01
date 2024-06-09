import React from 'react'
import Layout from '../../components/layouts/Layout'
import img1 from "../../assets/container2.webp";
import { useCom } from '../../context/ComContext';
import img2 from "../../assets/h2.webp";
import img3 from "../../assets/h3.webp";
import HomesBox from '../../components/HomesBox';
import { NavLink } from 'react-router-dom';


const Homes = () => {

  const homeInfo = [
    {
      id: 1,
      image: img2,
      name: "The Silver Mansion",
      desc: "Brand new 1 bed/1 bath Tiny Home for sale",
      downP: 4000,
      installment: "500-5000"
    },
    {
      id: 2,
      image: img3,
      name: "The Beauty Palace",
      desc: "Beautiful Tiny House for Sale",
      downP: 8000,
      installment: "450-6500"
    },
  ]

  const [comName] = useCom();

  return (
    <Layout title={`${comName} - Buy Homes`}>
      <div className='w-full relative' >
        {/* Image Banner */}
        <div className='flex items-center justify-center' >
          <img src={img1} className='w-full h-[500px] object-cover' alt="Sorry" />
          <h1 className='absolute top-0 flex items-center justify-center font-display text-4xl sm:text-6xl font-bold text-gray-300 text-center mt-48 tracking-wide' > Browse and Buy Homes From Us to Live Happily </h1>
        </div>

        {/* Main Homes section */}
        <div className='py-28 sm:max-w-screen-2xl sm:mx-auto' >
          {
            homeInfo.map((i) => (
              <NavLink to={"/knowMore"} key={i.id}>
                <HomesBox homeInfo={i} />
              </NavLink>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default Homes