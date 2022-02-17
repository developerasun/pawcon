// Declare and export component type here
// Setting repeatedly used card style
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

export interface IButtonProps {
    btnText? : string
    url? : string
}

// cart related props
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