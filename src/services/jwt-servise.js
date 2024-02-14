const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY 

exports.sign = (input) => jwt.sign(input,SECRET_KEY)

exports.validateUser = (accessToken) => jwt.verify(accessToken,SECRET_KEY)