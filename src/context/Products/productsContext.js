import {createContext, useContext} from "react";
import {useReducerAsync} from 'use-reducer-async';
import {productReducer} from "@/context/Products/productsReducer";
import {GetProducts} from "@/services/products/products";

const ProductContext = createContext()
const ProductContextAction = createContext()

const initialState = {
    data: [],
    loading: false,
    errors: null
}
export const asyncActionHandlers = {
    GET_PRODUCTS: ({dispatch}) =>
        async action => {
            dispatch({type: 'PRODUCTS_PENDING'});
            await GetProducts()
                .then(res => {
                    setTimeout(() => {
                        dispatch({type: 'PRODUCTS_SUCCESS', payload: res.data});
                    }, 1500)
                })
                .catch(err => {
                    dispatch({type: 'PRODUCTS_REJECT', payload: err});
                });
        },
}
export function ProductsProvider({children}) {
    const [products, dispatch] = useReducerAsync(productReducer, initialState, asyncActionHandlers);
    return (
        <ProductContext.Provider value={products}>
            <ProductContextAction.Provider value={dispatch}>
                {children}
            </ProductContextAction.Provider>
        </ProductContext.Provider>
    )
}

export const useProducts = () => [useContext(ProductContext), useContext(ProductContextAction)]