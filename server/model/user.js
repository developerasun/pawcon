const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

// TO DO : add admin id 
const userSchema = new Schema({
    email : {
        type: String, 
        required : true,
        unique: true // email field should not be duplicated
    }, 
    password : {
        type: String, 
        required: true,
        minlength: [6, "Password should be at least 6 characters."],
        unique : false // password doesn't have to be unique
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

// NOTE: used in /login POST request => password checking static method
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

// NOTE : used in /signup POST request => password validation checking static method
userSchema.statics.validatePassword = async function(email, password) {
    try { 
        // password should be at least 6 characters. 
        if (password.length >= 6) {
            return { 
                success : true, 
                email : email,
                password : password, 
            }
        }
        return { 
            success : false, 
            errorMessage : "Password should be at least 6 characters."
        }
    } catch(err) {
        console.log(err)
    }
}

const PawConUser = mongoose.model('PawConUser', userSchema)

module.exports = PawConUser 