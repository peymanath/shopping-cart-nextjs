import React, {useEffect, useState} from 'react';
import Layout from '@/components/common/layouts/layout';
import CartItem from "@/components/cart/CartItem";
import Link from "next/link";
import Button from "@/components/common/Button";
import {useCart} from "@/context/Cart/cartContext";

const Checkout = props => {
    const [dataCheckout, setDataCheckout] = useState({
        totalPrice: null
    })
    const [cart, dispatchCart] = useCart()

    useEffect(() => {
        const totalPrice = cart.cart.reduce((count, curItem) => {
            return count + parseFloat(curItem.totalPrice);
        }, 0)
        setDataCheckout({...dataCheckout, totalPrice})
    }, [cart])


    return (
        <Layout>
            <div className="container flex flex-col justify-between gap-3">
                {
                    cart.cart?.length > 0 ?
                        <>
                            <div className="text-4xl pb-10 text-center">
                                Checkout
                            </div>
                            <div className="flex flex-col justify-between gap-3">
                                {
                                    cart.cart?.map((props) => (
                                        <CartItem key={props.id} {...props}/>
                                    ))
                                }
                            </div>
                            <div
                                className="border rounded-lg p-4 flex flex-wrap items-center justify-between gap-5 w-full">
                                <p>Total Price: {dataCheckout.totalPrice} $</p>
                            </div>
                            < Link href="/">
                                < Button text="Settlement and payment"/>
                            </Link>
                        </>
                        : <p>Card Empty</p>
                }
            </div>
        </Layout>
    )
};

export default Checkout;
