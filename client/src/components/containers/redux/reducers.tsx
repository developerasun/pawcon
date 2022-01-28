import { initialLoginState, initialCartItemState } from "./initialStates"
import { DECREASE_QTY, INCREASE_QTY, LOGIN, LOGOUT, REMOVE_FROM_CART } from "./actionTypes"
import { LoginActionPayload, CartActionPayload  } from "./actionCreators"

export const loginReducer = ( state = initialLoginState, action : LoginActionPayload ) => { 
    switch (action.type) { 
        case LOGIN : 
            return { 
                isLogin : !state.isLogin
            }
        case LOGOUT : 
            return { 
                isLogin : !state.isLogin
            }
        default : 
            return state
    }
}

export const cartReducer = ( state = initialCartItemState, action : CartActionPayload ) => {
    switch (action.type) {
        case INCREASE_QTY : 
            const increasedState = state.map((item) => {
                if (item.id === action.payload){ item.quantity += 1 }
                return item
            })
            return increasedState
        case DECREASE_QTY : 
            const decreasedState = state.map((item) => {
                if (item.id === action.payload && item.quantity > 0) { item.quantity -= 1}
                return item 
            })
            return decreasedState
        case REMOVE_FROM_CART : 
            return state
        // should return initial state for default case
        default : 
            return state
    }
}

