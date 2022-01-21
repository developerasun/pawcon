// Declare and export component type here
export type ProfileProps = {
    name : string
    email : string
    isLoggedIn : boolean 
}

// Setting repeatedly used card style
export type BasicCardDetailsProps = { 
    date? : string
    title? : string
    description : string | string[]
    image : string
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
    btnText : string
    url? : string
}