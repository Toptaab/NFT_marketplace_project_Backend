const catchError = require("../utils/catch-error")
const createError = require("../utils/createError")
const getAuthorization = require("../utils/getAuthorization")
const jwt = require('../services/jwt-servise')



module.exports =  authenticate = catchError (async (req,res,next) => {
    const authorizationToken = req.headers.authorization;
    if(!authorizationToken|| !authorizationToken.startsWith('Bearer ')){createError(401,"need credential")}

    const token = getAuthorization(req.headers.authorization)
    const user = jwt.validateUser(token)

    req.body.userId = user.id

    next()
})