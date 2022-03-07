import { 
    LOGIN, LOGOUT, 
    ADD_TO_CART, REMOVE_FROM_CART,
    INCREASE_QTY, DECREASE_QTY, GOOGLE_LOGIN, GOOGLE_LOGOUT
} from "./actionTypes"
import { Product } from "../C_props"
import { googleLoginStateProps } from "./initialStates"

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
type CartFormActionPayload = ReturnType<typeof increaseQuantity>
type CartListActionPayload = ReturnType<typeof addToCart>

// action creators for cart form
export const addToCart = ( product : Product ) => {
    return { 
        type : ADD_TO_CART,
        payload : product
    }
}

// action creators for cart list component
export const removeFromCart = ( title : string ) => {
    return { 
        type : REMOVE_FROM_CART, 
        payload : title
    }
}

export const increaseQuantity = ( title : string ) => {
    return {
        type : INCREASE_QTY, 
        payload : title
    }
}

export const decreaseQuantity = ( title : string ) => {
    return {
        type : DECREASE_QTY,
        payload : title
    }
}


// action type setting for google login reducer
export type GoogleLoginActionPayload = GoogleLoginType | GoogleLogoutType
type GoogleLoginType = ReturnType<typeof googleLogin>
type GoogleLogoutType = ReturnType<typeof googleLogout>
// action creators for google login
export const googleLogin = ( username : string ) => {
    return {
        type : GOOGLE_LOGIN, 
        payload : username
    }
}

export const googleLogout = () => {
    return { 
        type : GOOGLE_LOGOUT, 
        payload : undefined
    }
}