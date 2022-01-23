// api controller here
const path = require('path')

const fs = require('fs')
const dummyjson = require('dummy-json')
const template = fs.readFileSync(path.join(__dirname, '..', 'data', 'template.hbs'), { encoding: 'utf8' });

// TESTED : send a dummy json template
const apis_get = (req, res) => {
    res.set('Content-Type', 'application/json')
    res.status(200).send(dummyjson.parse(template))
}
module.exports = { 
    apis_get
}