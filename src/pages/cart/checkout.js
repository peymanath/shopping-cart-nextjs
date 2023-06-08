import React, {useEffect, useState} from 'react';
import Layout from '@/components/common/layouts/layout';
import CartItem from "@/components/cart/CartItem";
import Link from "next/link";
import Button from "@/components/common/Button";
import {useCart} from "@/context/Cart/cartContext";

const Checkout = props => {
    const [checkoutItems, setCheckoutItems] = useState()
    const [dataCheckout, setDataCheckout] = useState({
        totalPrice: null
    })
    const [cart, dispatchCart] = useCart()

    useEffect(() => {
        setCheckoutItems(cart.cart || [])
    }, [cart])

    useEffect(() => {
        const totalPrice = cart.cart.reduce((count, curItem) => {
            return count + parseFloat(curItem.totalPrice);
        }, 0)
        setDataCheckout({...dataCheckout, totalPrice})
    }, [checkoutItems])

    return (
        <Layout>
            <div className="container flex flex-col justify-between gap-3">
                {
                    checkoutItems?.length > 0 ?
                        <>

                            <div className="text-4xl py-10 text-center">
                                Cart
                            </div>
                            <div className="flex flex-col justify-between gap-3">
                                {
                                    checkoutItems?.map((props) => (
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
