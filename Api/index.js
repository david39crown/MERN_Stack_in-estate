import dotenv from "dotenv"
import  express  from "express"
import mongoose from "mongoose"
import userRouter from './routes/user.route.js'
dotenv.config()

const app=express()

mongoose.connect(process.env.MONGO).then(()=>
{
    console.log("connected successFully ")
})
.catch((err)=>
{
    console.log(err)
})


app.listen(3000,()=>{
    console.log('port is running on 3000')
})

app.use('/Api/user',userRouter)