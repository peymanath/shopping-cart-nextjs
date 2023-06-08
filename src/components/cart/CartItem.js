import Image from "next/image";
import {Minus, Plus, Trash} from "react-huge-icons/outline";
import {ADD_PRODUCT, DELETE_PRODUCT, REMOVE_PRODUCT} from "@/context/Cart/cartReducer";
import {useCart} from "@/context/Cart/cartContext";
import {makeCartData} from "@/components/common/utils/makeCartData";

const CartItem = (props) => {

    const [cart, dispatchCart] = useCart()
    const addProduct = () => {
        dispatchCart({type: ADD_PRODUCT, payload: makeCartData(props)})
    }
    const removeProduct = () => {
        dispatchCart({type: REMOVE_PRODUCT, payload: props.id})
    }
    const deleteProduct = () => {
        dispatchCart({type: DELETE_PRODUCT, payload: props.id})
    }

    return (
        <div className="border rounded-lg p-4 flex flex-wrap items-center justify-between gap-5 w-full">
            <div className=""><Image width={60} height={60} src={props.image} alt={props.title}/></div>
            <div className="w-[40%]">{props.title}</div>
            <div className="">{props.totalPrice || props.price} $</div>
            <div className=" flex items-center justify-between gap-3">
                <button onClick={removeProduct} className="bg-red-500 text-white rounded p-1">
                    <Minus className="w-4 h-4"/>
                </button>

                <p>
                    {props.quantity}
                </p>

                <button onClick={addProduct} className="bg-green-500 text-white rounded p-1">
                    <Plus className="w-4 h-4"/>
                </button>

            </div>
            <div className="flex items-center justify-between">
                <button onClick={deleteProduct} className="bg-red-500 text-white rounded p-1">
                    <Trash className="w-5 h-5"/>
                </button>
            </div>
        </div>
    )
};

export default CartItem;