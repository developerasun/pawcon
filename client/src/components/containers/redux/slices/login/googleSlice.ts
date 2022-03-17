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