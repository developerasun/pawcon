import { initialLoginState, initialCartItemState, initialCartItemStateProps } from "./initialStates"
import { ADD_TO_CART, DECREASE_QTY, INCREASE_QTY, LOGIN, LOGOUT, REMOVE_FROM_CART } from "./actionTypes"
import { LoginActionPayload, CartActionPayload } from "./actionCreators"

export const loginReducer = ( state = initialLoginState, action : LoginActionPayload ) => { 
    switch (action.type) { 
        case LOGIN : 
            // returned object should have the same properties as initial state
            return { 
                isLogin : !state.isLogin, 
                email : action.payload
            }
        case LOGOUT : 
            return { 
                isLogin : !state.isLogin,
                email : ""
            }
        default : 
            return state
    }
}

export const cartReducer = ( state = initialCartItemState, action : CartActionPayload ) => {
    switch (action.type) {
        // quantity control
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

        // NOT TESTED : add/remove items
        case ADD_TO_CART : 
            const newlyAdded :initialCartItemStateProps = { 
                image : action.payload.image, 
                price : action.payload.price, 
                quantity : action.payload.quantity, 
                id : action.payload.id
            }
            return [
                ...state, 
                newlyAdded
            ]
        
        // NOT DONE : add/remove items
        case REMOVE_FROM_CART : 
            return state
        // should return initial state for default case
        default : 
            return state
    }
}
