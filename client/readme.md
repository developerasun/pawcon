# PawCon Client Side
Install dependency. 

```shell
$npm install
```

Run npm start for local development.

```shell
$npm start
```

Run npm build for optimized production. 

```shell
$npm run build
```

## Characteristics
PawCon client section has following characteristics. 

1. meta tags are added in public/index.html
1. redux store manages application state.
1. interface and props are managed in C_props.tsx
1. sub components such as navbar and footer are managed in sub components directory
1. data are fetched from localhost server, which means you should run pawcon server section first. 
1. react router takes most of user requests except login, signup, api, improving perfomance.

Check container/C_apiUrl for APIs. 

```ts
// Dev API url
export const API_DEV = { 
    artworks : {
        baseUrl : `localhost/apis/artworks/` 
    },
}

// Production API url
export const API_PROD = { 
    artworks : { 
        baseUrl :"deployed/base/api/url/here" 
    },
}
```

React component is functional components with interface props. Props are destructured and have verb-based names. 

```tsx
interface AppProps { 
  name : string
}
const App = ( { name } : AppProps) => {
  return <div></div>;
};

export default App;
```


