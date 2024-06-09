import React from 'react'
import Layout from '../../components/layouts/Layout'

const NotFound = () => {

    const [comName] = useCom();

    return (
        <Layout title={`${comName} - Unavailable/Unauthorized Page`} >
            <div className='w-full flex items-center justify-center' >
                <h1 className='font-[display] text-3xl font-semibold' > Sorry this page is Unavailable/Unauthorized right now. Please Contact Us <a>  </a>  </h1>
            </div>
        </Layout>
    )
}

export default NotFound