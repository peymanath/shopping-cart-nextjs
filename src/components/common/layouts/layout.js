import React from 'react';
import Header from '@/components/common/header/header';
import Footer from '@/components/common/footer/footer';

const Layout = ({children}) => (
    <>
        <Header/>
        <mian className="container">
            {children}
        </mian>
        <Footer/>
    </>
);

export default Layout;
