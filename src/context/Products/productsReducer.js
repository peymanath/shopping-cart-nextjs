export const productReducer = (state, action) => {
    switch (action.type) {
        case 'PRODUCTS_PENDING':
            return {data: null, loading: true, errors: null};
        case 'PRODUCTS_SUCCESS':
            return {data: action.payload, loading: false, errors: null};
        case 'PRODUCTS_REJECT':
            return {data: null, loading: false, errors: action.payload};
        default:
            throw new Error('no such action type');
    }
}