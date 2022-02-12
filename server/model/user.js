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

// password checking static method
userSchema.statics.checkPassword = async function( email, password ) {
    try { 
        // check user exists
        const user = await this.findOne({email})
        if (user) {
            const isMatched = await bcrypt.compareSync(password, user.password)

            // userSchema will be stored in _doc key.
            if (isMatched) { return( {...user, success : true} ) } 
            else { return { errorMessage : 'Incorrect password', success : false } }
        }

        // if not exists, send error object
        return { errorMessage : 'Incorrect email', success : false }
    } catch(err) { 
        console.error(err)
        throw err
    }
}

const PawConUser = mongoose.model('PawConUser', userSchema)

module.exports = PawConUser 