import React from 'react';
import Helmet from "react-helmet";
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Layout = ({
    children,
    title = "Construction",
    description = "This is a Real Estate and Construction Website that is made by Zayed Alam",
    keywords = "construction, online, order, purchase, real estate, realtor, business, container, home, container home",
    author = "Zayed Alam"
}) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <div className='bg-gradient-to-br from-gray-800 to-gray-900'>
                <main className='min-h-screen'>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
