// JSON files stored in JSONbin.io

// Production API url
export const API_PROD = { 
    artworks : { 
        baseUrl :"https://api.jsonbin.io/b/61fa2b59518e5f3b2ab4a6a5" 
    },
    users : {
        baseUrl : ""
    }
}

// Dev API url
export const API_DEV = { 
    artworks : {
        baseUrl : `/apis/artworks/` 
    },
    users : {
        baseUrl : `localhost/apis/users/` 
    } 
}