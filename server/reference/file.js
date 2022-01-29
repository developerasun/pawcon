// File system CRUD

const fs = require('fs')

console.log(1)
console.log(2)

// reading file is asynchronous, meaning non-block
// fs.readFile('./docs/hello.txt', (err, data)=> {
//     if (err) return console.log(err)
//     // console.log(data) // result : buffer, a package of data
//     console.log(data.toString()) // result : string
//     // console.log(data.toJSON()) // result : JSON
// })

console.log(3)
console.log(4)

// write file and then read it to check result
fs.writeFile('./docs/hello.txt', 'goodbye file system', ()=>{
    fs.readFile('./docs/hello.txt', (err, data)=>{
        if (err) return console.log(err)
        console.log(data.toString())
    })
} )

// create directory and file and then change its content
if (!fs.existsSync('./myDirectory')) { // check if a specific dir exists
    fs.mkdir('./myDirectory', (err)=>{
        if(err) return console.log(err)
    
        fs.writeFile('./myDirectory/chain.txt', `
        create a directory first and then create a file
        `, ()=> {
            fs.readFile('./myDirectory/chain.txt', (err, data)=>{
                if(err) return console.log(err)
                console.log(data.toString())
            })
        })
    })
} else { console.log ("already exists")}

// check if a specific file exists, if does, delete the file
// filesystem.existsSync : Returns true if the path exists, false otherwise.
if (fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err)=>{
        if (err) return console.log(err)
        console.log("deleted")
    })
} else { 
    console.log("the requested file does not exist or already deleted")
}

// 