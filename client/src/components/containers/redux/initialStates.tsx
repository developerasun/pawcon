import { ArtworkList, Product } from "../C_props"

// Set login state
export interface initialLoginStateProps { 
    isLogin : boolean
    email : string
}

export const initialLoginState : initialLoginStateProps = { 
    isLogin : false,
    email : "guest"
}

// set google login state
export interface googleLoginStateProps { 
    success : boolean
    username : string
}

export const initialGoogleLoginState : googleLoginStateProps = {
    success : false, 
    username : "guest"
} 

// Set cart item state
export const initialCartItemState : Product[] = [ ]

// set artwork item state 
export const initialArtworkItemState : ArtworkList = []