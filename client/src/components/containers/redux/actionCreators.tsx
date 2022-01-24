import { LOGIN, LOGOUT, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"

// action type setting for login reducer
export type setLoginAction = ReturnType<typeof login>
export type setLogoutAction = ReturnType<typeof logout>

// action creators for login
export const login = () => {
    return { 
        type : LOGIN
    }
}

export const logout = () => {
    return { 
        type : LOGOUT
    }
}


// NOT DONE : action type setting for cart reducer
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

