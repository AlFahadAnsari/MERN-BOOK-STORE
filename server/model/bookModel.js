import mongoose from 'mongoose'

const BookSchema =mongoose.Schema({

    name:String,
    title:String,
    price:Number,
    catogry:String,
    image:String

})

 let Book =mongoose.model('books',BookSchema)

export default Book

