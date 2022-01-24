import { initialLoginState, initialProductState } from "./initialStates"
import { LOGIN, LOGOUT } from "./actionTypes"
import { setLoginAction, setLogoutAction } from "./actionCreators"

export const loginReducer = ( state = initialLoginState, action : setLoginAction ) => { 
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

export const cartReducer = ( state = initialProductState, action : any ) => {
    switch (action.type) {

        // should return initial state for default case
        default : 
            return state
    }
}