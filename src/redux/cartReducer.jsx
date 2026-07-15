const initialData = {
    cart_items: []
}

export const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
           
        case 'UPDATE_CART':

        case 'REMOVE_CART':
           
        case 'CLEAR_CART':
            return {
                cart_items: []
            }

        default:
            return state
        

    }
}