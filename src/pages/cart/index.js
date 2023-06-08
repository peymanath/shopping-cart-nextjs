import React, {useEffect, useState} from 'react';
import Layout from "@/components/common/layouts/layout";
import {useCart} from "@/context/Cart/cartContext";
import CartItem from "@/components/cart/CartItem";
import Link from "next/link";
import Button from "@/components/common/Button";

const Cart = (props) => {
    const [cartItems, setCarItems] = useState()
    const [cart, dispatchCart] = useCart()

    useEffect(() => {
        setCarItems(cart.cart || [])
    }, [cart])

    return (
        <Layout>
            <div className="container flex flex-col justify-between gap-3">
                {
                    cartItems?.length > 0 ?
                        <>
                            <div className="text-4xl pb-10 text-center">
                                Cart
                            </div>
                            <div className="flex flex-col justify-between gap-3">
                                {
                                    cartItems?.map((props) => (
                                        <CartItem key={props.id} {...props}/>
                                    ))
                                }
                            </div>
                            <Link href="/cart/checkout">
                                <Button text="Checkout"/>
                            </Link>
                        </>
                        : <p>Card Empty</p>
                }
            </div>
        </Layout>
    )
};

export default Cart;