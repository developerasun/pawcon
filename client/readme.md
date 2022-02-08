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

## React Components:
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

</details>



