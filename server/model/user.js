const mongoose = require('mongoose')
const Schema = mongoose.Schema

// npm install : 1) bcrypt 2) validator

const userSchema = new Schema({
    email : {
        type: String, 
        required : true,
        unique: true
    }, 
    password : {
        type: String, 
        required: true
    }
}, { timestamps: true })


// Hashing password before saving it in database
userSchema.pre('save', ()=> {
    // bcrypt here
})

userSchema.pre('save', ()=> {
    // bcrypt here
})

// post hook : status checking 
userSchema.post('save', ()=> {
    
})

const pawConUser = mongoose.model('pawConUser', userSchema)

module.exports = { pawConUser }