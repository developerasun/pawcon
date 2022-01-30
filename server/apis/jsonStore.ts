// JSONs created will be stored in JSONBIN.io
// Flow : schema => image hosting => JSON hosting
type title = string

type file = {
    fileName : string
    contentType : string
    size : number
}

type details = { 
    identity : identity, 
    image : image 
}

type identity = {
    id : string,
    title : string, 
    description : string,
    author : string,
    date : string
}
type image = {
    width : number
    height : number
    url : string
}

// Create artwork schema for artwork api
interface ArtworkSchema {
    title : title,
    file : file, 
    details : details, 
}

const artworkSchema: ArtworkSchema = {
    "title": "Cat The Chimney",
    "file": {
      "fileName": "quwowooybuqbl6ntboz3.jpg",
      "contentType": "image/png",
      "size": 27187
    },
    "details": {
      "identity" : {
        "id" : "20220101", 
        "title" : "Cat The Chimney", 
        "description" : "No cat more adorable than me.", 
        "author" : "Jake", 
        "date" : "2021.11.15" 
      }, 
      "image": {
        "width": 600,
        "height": 446,
        "url": "https://i.ibb.co/5WxWg0x/1.webp"
      }
    }
  }

// Create UserSchema for user api  
interface UserSchema {

}