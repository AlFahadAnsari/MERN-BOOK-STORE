import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: true,
    },

    email: {

       type: String,
        require: true,    
        unique:true, 
    },

    password:{
        type: String,
        require: true,  
    }
    
})

let User =mongoose.model('User',userSchema)

export default User