import { Product } from "../propContatiner"

// Set login state
export interface initialLoginStateProps { 
    isLogin : boolean
    email : string
}

export const initialLoginState : initialLoginStateProps = { 
    isLogin : false,
    email : "guest"
}

// Set cart item state
export const initialCartItemState : Product[] = [ ]
