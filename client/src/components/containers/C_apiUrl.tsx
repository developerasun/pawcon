// JSON files stored in JSONbin.io

// Production API url
export const API_PROD = { 
    artworks : { 
        baseUrl :"" 
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
    logout : "http://localhost:3001/logout",
    oauth : { 
        google : { 
            url : "http://localhost:3001/oauth/google", 
            user : "http://localhost:3001/apis/users/google", 
            logout : "http://localhost:3001/oauth/google/logout"
        }, 
        github : ""
    },
    signup : "http://localhost:3001/signup", 
    editorJs : { 
        POST : "http://localhost:3001/community/feedback",
        GET : "http://localhost:3001/apis/feedbacks"
    }
}

export const PROVIDER = { 
    INFURA : 
    {
        MAINNET : "https://mainnet.infura.io/v3/a863bd289bd94db793914e7fb76dccba",
        ROPSTEN : "https://ropsten.infura.io/v3/201092bdfa434e76ad85b29f00ea832e"
    },
    HARDHAT : "HTTP://127.0.0.1:8545", 
}

export const dummies = { 
    account1 : { 
        address : '0xEcAB21327B6EbA1FB0631Dc9bBc5863B6B2be3E4', 
        privateKey : '0xa89591a01d7617197f5665a668da8f546f9632ba9c6c8beb7c1f57cb06a27e71', 
    }, 
    account2 : { 
        address : '0x56012CaBddfF2bA8f3C36EBDe507eb8948c5CBfA', 
        privateKey : '0xd1a90b633cd34ea4aaa8a5fe8f250a31801f0f4cdad12687e6674a8d0dd9e812', 
    }
} 