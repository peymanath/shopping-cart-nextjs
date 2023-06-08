export const makeCartData = (props) => {
    return {
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        price: props.price,
        category: props.category,
        quantity: 1,
        totalPrice: props.price
    }
}
