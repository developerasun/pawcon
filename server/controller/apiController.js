const path = require('path')
const fs = require('fs')

const getUsers = (req, res) => {
    res.set('Content-Type', 'application/json')
    // convert buffer to string
    res.status(200).send(users.toString())
}

// dynamic routes for artworks
const getArtworks = (req, res) => {
    const artworks = fs.readFileSync(path.join(__dirname, '..', 'apis', 'artworks', `artwork${req.params.page}.json`))
    res.set('Content-Type', 'application/json')
    res.status(200).send(artworks.toString()) // send string data
}

module.exports = { 
    getUsers, 
    getArtworks
}