const express =require('express')

const app = express()

require('dotenv').config()

const authRouter = require('./routes/auth-route')
const userRouter = require('./routes/user-route')
const errorHandler = require('./middlewares/error')

app.use(express.json())


app.use('/auth',authRouter)
app.use('/user', userRouter)




app.use(errorHandler)

const PORT = process.env.PORT


app.listen(PORT, ()=> console.log("server is running on port: ", PORT))