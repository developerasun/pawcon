const fs = require('fs')

const readStream = fs.createReadStream('./docs/bigFile.txt', { encoding : 'utf-8' })
const writeStream = fs.createWriteStream('./docs/newBigFile.txt')
// on : event listener in stream
// data : data event
// readStream.on('data', (chunk)=>{
//     console.log("========geting data========")
//     console.log(chunk)

//     // pass the data to writeStream
//     writeStream.write("*********writing new chunk2*********")
//     writeStream.write(chunk)
// })

// pipe : passing passing data from readable stream to writable stream eright away
readStream.pipe(writeStream)