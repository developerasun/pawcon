const path = require('path')
const fs = require('fs')

// setting files
const users = fs.readFileSync(path.join(__dirname, '..', 'apis', 'users.json', ))
const artworks = fs.readFileSync(path.join(__dirname, '..', 'apis', 'artworks.json', ))

const getUsers = (req, res) => {
    res.set('Content-Type', 'application/json')

    // convert buffer to string
    res.status(200).send(users.toString())
}

const getArtworks = (req, res) => {
    res.set('Content-Type', 'application/json')
    res.status(200).send(artworks.toString())
}

module.exports = { 
    getUsers, 
    getArtworks
}