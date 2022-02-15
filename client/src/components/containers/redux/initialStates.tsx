import { v4 } from "uuid"

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
export interface initialCartItemStateProps {
    image : string
    price : number
    quantity : number
    title :string
}

export const initialCartItemState : initialCartItemStateProps[] = [
    { image : '' , price : 1, quantity : 1, title : '' }
]
