export const setCartSession = (item) => sessionStorage.setItem('cart', JSON.stringify(item))
export const getCartSession = () => {
    return (
        typeof window !== "undefined" ?
            window.sessionStorage.getItem("cart") ? JSON.parse(sessionStorage.getItem('cart')) : []
            : []
    )
}