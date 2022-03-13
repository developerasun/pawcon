// TO DO : delete this container
import { v4 as uuidV4 } from 'uuid'

export const themeContext = { 
    "backgroundColor" : "green"
} as React.CSSProperties
 
export const artworkContext = [
    {id : uuidV4(), title: "Cat The Chimney", description : "No cat more adorable than me.", author:"Jake", date:"2021.11.15", image : 'one'},
    {id : uuidV4(), title: "Mr.Gentle", description : "Come see my paws here", author:"Jake", date:"2011.03.22", image : 'two'},
    {id : uuidV4(), title: "The Cat Meme", description : "Yeah, I'm that cat meme.", author:"Jake", date:"2015.09.22", image : 'three'},
    {id : uuidV4(), title: "Quiet Pranky", description : "Shhh, everybody quiet here", author:"Jake", date:"2033.02.16", image : 'four'},
] 
