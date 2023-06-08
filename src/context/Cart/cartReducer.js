import {setCartSession} from "@/components/common/utils/cartSession";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
const addProductToCart = (product, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({...product, quantity: 1});
    } else {

        let updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        updatedItem = {
            ...updatedItem,
            quantity: updatedItem.quantity += 1,
            totalPrice: (updatedItem.price * updatedItem.quantity).toFixed(2)
        }

        updatedCart[updatedItemIndex] = updatedItem;
    }
    setCartSession(updatedCart)
    return {...state, cart: updatedCart};
};
const removeProductFromCart = (productId, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

    let updatedItem = {
        ...updatedCart[updatedItemIndex]
    };

    updatedItem = {
        ...updatedItem,
        quantity: updatedItem.quantity -= 1,
        totalPrice: (updatedItem.price * updatedItem.quantity).toFixed(2)
    }

    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    setCartSession(updatedCart)
    return {...state, cart: updatedCart};
};
const deleteProductFromCart = (productId, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);
    updatedCart.splice(updatedItemIndex, 1);
    setCartSession(updatedCart)
    return {...state, cart: updatedCart};
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.payload, state)
        case REMOVE_PRODUCT:
            return removeProductFromCart(action.payload, state)
        case DELETE_PRODUCT:
            return deleteProductFromCart(action.payload, state)
        default:
            return {...state};
    }
}
