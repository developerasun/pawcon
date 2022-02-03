import { 
    LOGIN, LOGOUT, 
    ADD_TO_CART, REMOVE_FROM_CART,
    INCREASE_QTY, DECREASE_QTY
} from "./actionTypes"

// action type setting for login reducer
// LoginActionPayload will only show duplicated properties
export type LoginActionPayload = LoggedInActionPayload | LoggedOutActionPayload
type LoggedInActionPayload = ReturnType<typeof login>
type LoggedOutActionPayload = ReturnType<typeof logout>

// action creators for login
export const login = (email : string) => {
    return { 
        type : LOGIN,
        payload : email
    }
}

export const logout = () => {
    return { 
        type : LOGOUT, 
        payload : "" // for union type property consistency 
    }
}

// action type setting for cart reducer
export type CartActionPayload = CartFormActionPayload | CartListActionPayload
type CartFormActionPayload = ReturnType<typeof addToCart>
type CartListActionPayload = ReturnType<typeof removeFromCart>

// action creators for cart form
export const addToCart = ( id : string | number ) => {
    return { 
        type : ADD_TO_CART,
        payload : id
    }
}

// action creators for cart items
export const removeFromCart = ( id : string | number ) => {
    return { 
        type : REMOVE_FROM_CART, 
        payload : id
    }
}

// cart item list id is either string(uuid) or number
export const increaseQuantity = ( id : string | number ) => {
    return {
        type : INCREASE_QTY, 
        payload : id
    }
}

export const decreaseQuantity = (id : string | number) => {
    return {
        type : DECREASE_QTY,
        payload : id
    }
}