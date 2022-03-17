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