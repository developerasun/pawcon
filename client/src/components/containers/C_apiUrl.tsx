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
        baseUrl : `http://localhost:3001/apis/artworks/` 
    },
    users : {
        baseUrl : `http://localhost:3001/apis/users/` 
    }, 
    login : "http://localhost:3001/login",
    oauth : { 
        google : { 
            url : "http://localhost:3001/oauth/google", 
            user : "http://localhost:3001/oauth/google/user"
        }, 
        github : ""
    },
    signup : "http://localhost:3001/signup"
}