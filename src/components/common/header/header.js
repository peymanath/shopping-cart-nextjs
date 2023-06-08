import React, {useEffect, useState} from 'react';
import {ShoppingBag} from "react-huge-icons/outline";
import {useCart} from "@/context/Cart/cartContext";
import Link from "next/link";

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
        <div className="bg-primary10 text-primary">
            <div className="container flex items-center justify-between py-3">
                <div className="text-lg font-bold">
                    Peyman Shop
                </div>
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
