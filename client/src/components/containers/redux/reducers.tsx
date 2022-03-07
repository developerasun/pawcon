import { initialLoginState, initialCartItemState, initialGoogleLoginState } from "./initialStates"
import { ADD_TO_CART, DECREASE_QTY, GOOGLE_LOGIN, GOOGLE_LOGOUT, INCREASE_QTY, LOGIN, LOGOUT, REMOVE_FROM_CART } from "./actionTypes"
import { LoginActionPayload, CartActionPayload, GoogleLoginActionPayload } from "./actionCreators"

export const loginReducer = ( state = initialLoginState, action : LoginActionPayload ) => { 
    switch (action.type) { 
        case LOGIN : 
            // returned object should have the same properties as initial state
            return { 
                isLogin : true, 
                email : action.payload
            }
        case LOGOUT : 
            return { 
                isLogin : false,
                email : action.payload
            }
        default : 
            return state
    }
}

export const cartReducer = ( state = initialCartItemState, action : CartActionPayload ) => {
    // tip : deliver action.payload consistently in reducer logic
    // varies actual payload value in each component
    switch (action.type) {
        // quantity control
        case INCREASE_QTY : 
            const increasedState = state.map((item) => {
                if (item.title === action.payload && item.quantity < 999){ 
                    item.quantity++
                }
                return item
            })
            return increasedState
        case DECREASE_QTY : 
            const decreasedState = state.map((item) => {
                if (item.title === action.payload && item.quantity > 0) { item.quantity-- }
                return item 
            })
            return decreasedState
        // item control
        case ADD_TO_CART : 
            return [
                ...state, 
                action.payload
            ]
        case REMOVE_FROM_CART : 
            const remainedCart = state.filter((item) => {
                return item.title !== action.payload
            })
            return remainedCart
        // should return initial state for default case
        default : 
            return state
    }
}

export const googleLoginReducer = ( state = initialGoogleLoginState, action : GoogleLoginActionPayload ) => {
    switch(action.type) {
        case GOOGLE_LOGIN : 
            return { 
                success : true, 
                username : action.payload
            }
        case GOOGLE_LOGOUT : 
            return { 
                success : false, 
                username : action.payload
            }
        default : 
            return state
    }
}