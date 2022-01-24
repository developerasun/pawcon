// sample action types
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// action creators for cart
export const addToCart = () => {
    return { 
        type : ADD_TO_CART
    }
}

export const removeFromCart = () => {
    return { 
        type : REMOVE_FROM_CART
    }
}