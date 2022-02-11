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

Check container/apiUrlContainer to change api url from dev to production. 

```ts
// Production API url
export const API_PROD = { 
    artworks : { 
        baseUrl :"deployed/base/api/url/here" 
    },
}

// Dev API url
export const API_DEV = { 
    artworks : {
        baseUrl : `localhost/apis/artworks/` 
    },
}
```

<details>
<summary>Characteristics</summary>

- meta tags are added in public/index.html
- interface and props are managed in container.tsx
- sass modules are managed in partials directory
- fetch data from localhost server and render
- redux store manages application state : e.g login user email, cart 
- react router takes most of user requests except login, signup, api, improving perfomance
</details>

<summary>Conventions</summary>

## React 
### Component
- default : React/TS Stateless function component + interface props

```ts
interface AppProps { 
  name : string
}
const App = ( { name } : AppProps) => {
  return <div></div>;
};

export default App;
```

### Props
props should be named in a clear way what it is supposed to do. For example, 
- shouldBeGrid
- hasButton
</details>



