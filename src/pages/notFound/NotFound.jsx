import React from 'react'
import Layout from '../../components/layouts/Layout'
import { useCom } from '../../context/ComContext';

const NotFound = () => {

    const [comName] = useCom();

    return (
        <Layout title={`${comName} - Unavailable/Unauthorized Page`} >
            <div className='w-full flex items-center justify-center h-[100vh]' >
                <h1 className='font-[display] text-3xl font-semibold text-gray-300' > Sorry this page is Unavailable/Unauthorized right now. Please Contact Us with the form Below <a>  </a>  </h1>
            </div>
        </Layout>
    )
}

export default NotFound