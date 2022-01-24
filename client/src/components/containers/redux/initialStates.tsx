// Use this RootState for useSelector hook
export interface RootState  {
    login : initialLoginStateProps
    cart : initialCartStateProps<Products>
}

export interface Users { 
    username : string
    email : string
    password : string
}

export interface initialLoginStateProps { 
    isLogin : boolean
}

export const initialLoginState:initialLoginStateProps = { 
    isLogin : false,
}

export interface Products { 
    name : string
    author : string
    date : string
    price : number
}

export interface initialCartStateProps<Products> { 
    loading : false
    data : Products[]
    errorMessage : ''
}

export const initialProductState:initialCartStateProps<Products> = { 
    loading : false, 
    data : [], 
    errorMessage : ''
}