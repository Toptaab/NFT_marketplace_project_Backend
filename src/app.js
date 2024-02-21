const express =require('express')

const cors = require('cors')

const app = express()

require('dotenv').config()

const authRouter = require('./routes/auth-route')
const userRouter = require('./routes/user-route')
const assetRouter = require('./routes/asset-route')
const collectionRouter = require('./routes/collection-route')
const historyRouter = require('./routes/history-route')
const errorHandler = require('./middlewares/error')

app.use(cors());
app.use(express.json())


app.use('/auth',authRouter)
app.use('/user', userRouter)
app.use('/asset', assetRouter)
app.use('/collection', collectionRouter)
app.use('/history',historyRouter)



app.use(errorHandler)

const PORT = process.env.PORT


app.listen(PORT, ()=> console.log("server is running on port: ", PORT))