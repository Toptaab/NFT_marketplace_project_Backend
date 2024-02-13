const catchError = require("../utils/catch-error");
const jwt = require('../services/jwt-servise')
const userModel = require('../models/user-model')

exports.getAssets = catchError(async(req,res,next) => {
    
    jwt.validateUser()


})