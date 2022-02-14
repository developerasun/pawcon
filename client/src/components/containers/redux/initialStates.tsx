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
    id : string
}

export const initialCartItemState : initialCartItemStateProps[] = [
    { image : '' , price : 1, quantity : 1, id : v4() },
    { image : '' , price : 3, quantity : 4, id : v4() },
    { image : '' , price : 4, quantity : 10, id : v4() },
    { image : '' , price : 13, quantity : 2, id : v4() },
]
