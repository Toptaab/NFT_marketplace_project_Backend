const express =require('express')

const app = express()

require('dotenv').config()

const userRouter = require('./routes/user-route')

app.use(express.json())


app.use('/auth',userRouter)






const PORT = process.env.PORT


app.listen(PORT, ()=> console.log("server is running on port: ", PORT))