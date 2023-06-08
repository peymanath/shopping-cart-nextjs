import React from 'react';
import Image from "next/image";
import {useCart} from "@/context/Cart/cartContext";
import {ADD_PRODUCT} from "@/context/Cart/cartReducer";
import {makeCartData} from "@/components/common/utils/makeCartData";

const ProductItem = (props) => {
    const [cart, dispatchCart] = useCart()

    const addToCart = (props) => {
        dispatchCart({type: ADD_PRODUCT, payload: makeCartData(props)})
    }

    return (
        <div className="relative border rounded-lg shadow-icon overflow-hidden pb-12">
            <div className="flex flex-col justify-between gap-5 p-3 h-full">
                <Image width={300} height={850} src={props.image} alt={props.title}
                       className="object-contain w-full h-40"/>
                <p className="text-sm">{props.title}</p>
                <p>{props.price}</p>
            </div>
            <button className="absolute bottom-0 w-full py-2 text-center bg-primary text-white"
                    onClick={() => addToCart(props)}>
                افزودن به سبد خرید
            </button>
        </div>
    )
};

export default ProductItem;