import { v4 } from "uuid"

// Set login state
export interface initialLoginStateProps { 
    isLogin : boolean
}

export const initialLoginState:initialLoginStateProps = { 
    isLogin : false,
}

// Set user state
export interface Users { 
    username : string
    email : string
    password : string
}

export interface initialUserStateProps {
    loading : false, 
    data : Users[], 
    errorMessage : ''
}

// Set cart item state
export interface initialCartItemStateProps {
    image : string
    price : number
    quantity : number
    id : string | number
}

export const initialCartItemState : initialCartItemStateProps[] = [
    { image : '' , price : 1, quantity : 1, id : v4() },
    { image : '' , price : 3, quantity : 4, id : v4() },
    { image : '' , price : 4, quantity : 10, id : v4() },
    { image : '' , price : 13, quantity : 2, id : v4() },
]

// export interface Products { 
//     name : string
//     author : string
//     date : string
//     price : number
// }

// export interface initialCartStateProps<Products> { 
//     loading : false
//     data : Products[]
//     errorMessage : ''
// }

// export const initialProductState:initialCartStateProps<Products> = { 
//     loading : false, 
//     data : [], 
//     errorMessage : ''
// }