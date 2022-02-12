const fs = require('fs')

const testObject = { 
    "message" : "hello"
}

const toString = JSON.stringify(testObject)

fs.writeFileSync('./fileTest.json', toString)