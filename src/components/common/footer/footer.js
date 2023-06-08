import React from 'react';
import Link from "next/link";
const Footer = props => {
    return (
        <div className="bg-primary text-white fixed bottom-0 w-full">
            <div className="container py-3 text-center">
                Powered By <Link href="https://peymanath.ir" className="hover:text-white/60">Peyman Naderi</Link>
            </div>
        </div>
    )
};

export default Footer;
