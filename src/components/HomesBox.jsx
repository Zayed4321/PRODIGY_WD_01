import React from 'react'

const HomesBox = ({ homeInfo }) => {
    return (
        <div className='mb-20 px-5' >
            <div className='ring-2 bg-gray-300 shadow-xl shadow-indigo-500 drop-shadow-lg rounded-md flex flex-col sm:flex-row items-center justify-center sm:space-x-10' >
                <div className='sm:w-[40%]' >
                    <img src={homeInfo.image} alt="This is an image of the project" />
                </div>
                <div className='sm:w-[60%] flex flex-col items-start justify-center space-y-5 px-5 sm:px-0 pb-5 sm:pb-0' >
                    <h1 className='font-display font-semibold text-xl sm:text-3xl text-gray-600 mt-5 sm:mt-0' > <span className='font-extrabold text-gray-800' > Name : </span> {homeInfo.name} </h1>
                    <p className='font-display font-medium text-lg text-gray-600' > <span className='font-extrabold text-gray-800' > Home Description : </span> {homeInfo.desc} </p>
                    <p className='font-display font-medium text-lg text-gray-600' > <span className='font-extrabold text-gray-800' > Down Payment : </span> $ {homeInfo.downP} </p>
                    <p className='font-display font-medium text-lg text-gray-600 mb-5 sm:mb-0' > <span className='font-extrabold text-gray-800' > Installments : </span> $ {homeInfo.installment} / month </p>
                </div>
            </div>
        </div>
    )
}

export default HomesBox