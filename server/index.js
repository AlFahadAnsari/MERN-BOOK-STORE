import express from 'express'
import mongoose from 'mongoose'
import bookroute from './routes/book.route.js'
import userRoute from './routes/user.route.js'
import feedbackRoute from './routes/fedba.route.js'
import cors from 'cors'
const app = express();

app.use(cors()) 
app.use(express.json())



 try {
  mongoose.connect("mongodb+srv://ansari:alfahad@bookstoreproject.bwfbzuz.mongodb.net/booksStore")
  console.log('connect hogya hai');
 } catch (error) {
    console.log('error',error);
 }




// define router
app.use('/book',bookroute)
app.use('/user',userRoute)
app.use('/feedback',feedbackRoute)






app.get('/',(req,res)=>{
  res.send('hii i am home page')
})

app.listen(2000, () => {
  console.log('Example app listening on port 2000');
});
 