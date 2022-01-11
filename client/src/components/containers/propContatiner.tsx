// Declare and export component type here
export type ProfileProps = {
    name : string
    email : string
    isLoggedIn : boolean 
}

// Setting repeatedly used card style
type BasicCardDetailsProps = { 
    date : string
    title : string
    description : string
    image : string
}

export type GalleryCardsProps = {
    author : string
    id : number
} & BasicCardDetailsProps

export type AboutCardsProps = BasicCardDetailsProps

export type DropDownProps = { 
    mainTitle : string
    subTitle : string[]
    routing: string
}
