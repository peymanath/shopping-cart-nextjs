import React, {useEffect, useState} from 'react';
import {ShoppingBag} from "react-huge-icons/outline";
import {useCart} from "@/context/Cart/cartContext";
import Link from "next/link";
import Image from "next/image";

const Header = props => {
    const [cartItem, setCarItem] = useState()

    const [cart, dispatchCart] = useCart()

    useEffect(() => {
        const Items = cart.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0)
        setCarItem(Items)
    }, [cart])

    return (
        <div className="bg-primary10 text-primary sticky top-0 w-full z-[999]">
            <div className="container flex items-center justify-between py-3">
                <Link href="/" className='flex items-center gap-3'>
                    <Image
                        width='64'
                        height='24'
                        src='/assets/images/color-logo.png'
                        alt='Peyman ATH Logo'
                        title='لوگو پیمان نادری، حروف اول اسم "پیمان" با کد رنگی #ff6d00'
                        className='w-12'
                    />
                    <p className='hidden md:flex text-lg lg:text-xl'>Peyman Naderi</p>
                </Link>
                <Link href="/products">
                    Products
                </Link>
                <Link href="/cart" className="relative">
                    <ShoppingBag className="w-8 h-8"/>
                    <p className="absolute -top-2 -right-2 text-[10px] bg-green-500 text-white p-1 rounded-full">{cartItem}</p>
                </Link>
            </div>
        </div>
    )
};

export default Header;
