import {createContext, useContext, useReducer} from "react";
import {cartReducer} from "@/context/Cart/cartReducer";
import {getCartSession} from "@/components/common/utils/cartSession";

const CartContext = createContext()
const CartContextAction = createContext()

const initialState = {
    cart: getCartSession(),
    loading: false,
    errors: null
}

export function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, initialState)
    return (
        <CartContext.Provider value={cart}>
            <CartContextAction.Provider value={dispatch}>
                {children}
            </CartContextAction.Provider>
        </CartContext.Provider>
    )
}

export const useCart = () => [useContext(CartContext), useContext(CartContextAction)]