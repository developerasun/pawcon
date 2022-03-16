// ========================== Card types ========================== // 
export type BasicCardDetailsProps = { 
    date? : string
    title? : string
    description : string | string[]
    image : string
    hasButton : boolean
    buttonText? : string
    buttonUrl? : string
}

export type GalleryCardsProps = {
    author : string
    id : string
} & BasicCardDetailsProps

export type AboutCardsProps = BasicCardDetailsProps

export type DropDownProps = { 
    mainTitle : string
    subTitle : string[]
    routing: string
}
// ========================== Card types ========================== // 


// ========================== Sub component types ========================== // 
export interface IButtonProps {
    btnText? : string
    url? : string
    children? : React.ReactNode
    callback? : any
}
// ========================== Sub component types ========================== // 



// ========================== Cart types ========================== // 
export interface Product { 
    image : string
    title : string
    price : number
    quantity : number
}

export interface CartListProps {
    cartItems : Product[]
}

export interface RenderCartItemsProps { 
    image : string
    title : string
    price : number
    quantity : number
}
// ========================== Cart types ========================== // 

// ========================== API types ========================== // 
type title = string
type image = {
    width : number
    height : number
    url : string
}
type identity = {
    title : string, 
    description : string,
    author : string,
    date : string
}
type details = { 
    identity : identity, 
    image : image 
}

export interface Artwork {
    title : title,
    details : details, 
}

export type ArtworkList = Artwork[]
// ========================== API types ========================== // 

export interface FooterSectionProps { 
    sectionTitle : string  
    contents? : string[]
    link? : string[]
}

export interface LoginValidationError { 
    errorMessage : string
    success : boolean
}