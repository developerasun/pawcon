# PawCon Server
Teck requirements for PawCon server is as follows

- Node js
- Express.js

Install dependency. 

```shell
$npm install
```

Run npm start for local development.

```shell
$npm nodemon app
```

<details>
<summary>Conventions</summary>

## API 
function name should include http method.

```js
app.use('/apis', apiRouter)

// dynamic routing
apiRouter.get('/artworks/:id', getArtworks)
apiRouter.post('/users/:id', getArtworks)
```
</details>


<details>
<summary>Characteristics</summary>

- content here 
- content here 
- content here 
- content here 
</details>