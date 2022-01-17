const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

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
// Do NOT use arrow function for mongoose methods.
userSchema.pre('save', async function() {
    try { 
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds)
    } catch(err) {
        console.log("error types : ", err)
    }
})

userSchema.pre('save', function() {
    // bcrypt here
})

// post hook : status checking 
userSchema.post('save', function() {
    
})

const PawConUser = mongoose.model('PawConUser', userSchema)

module.exports = PawConUser 