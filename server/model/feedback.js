import mongoose from 'mongoose'

let feedBackSchema =mongoose.Schema({
    name:{
        type:String,
        require :true,
    },
    email:{
        type:String,
        require :true
    },
    message:{
        type:String
    }
},{ timestamps: true })

let feedBack = mongoose.model('feedBack',feedBackSchema)

export default feedBack