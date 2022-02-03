const path = require('path')
const fs = require('fs')

const getUsers = (req, res) => {
    res.set('Content-Type', 'application/json')
    // convert buffer to string
    res.status(200).send(users.toString())
}

// dynamic routes for artworks
const getArtworks = (req, res) => {
    res.set('Content-Type', 'application/json')
    res.status(200).send(
        fs.readFileSync(path.join(__dirname, '..', 'apis', 'artworks', `artwork${req.params.page}.json`))
    )
    // res.status(200).send(artworks.toString())
}

module.exports = { 
    getUsers, 
    getArtworks
}