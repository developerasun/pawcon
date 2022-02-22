import express from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log(req.url)
    res.json({ message : "pawcon server refactoring" })
})

app.listen(3000, () => {console.log("listening at port 3000")})