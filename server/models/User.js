import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        requirred: true,
        unique: true,
    },
    email:{
        type: String,
        requirred: true,
        unique: true,
    },
    password:{
        type: String,
        requirred: true
    },
    role:{
        type: String,
         default: 'user'
    }
});

const User = mongoose.model('User' , userSchema ) ;
export default User;
//module.exports = mongoose.model('User' , userSchema);