const express =require('express')
const prisma = require("prisma")

const app = express()


app.listen("8001", ()=> console.log("server is running on port: 8001"))