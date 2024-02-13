const userModel = require("../models/user-model");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-servise");
const catchError = require("../utils/catch-error")
const createError =require('../utils/createError')

exports.register = catchError(async (req,res,next)=> {
  const exisEmail = await userModel.getUserByEmail(req.body.email)
  if(exisEmail){createError(409,"this email is already in used")}

  const exisUser = await userModel.getUserByUserName(req.body.userName)
  if(exisUser){createError(409,"this username is already in used")}


    req.body.password = await hashService.bcrypt(req.body.password);
    const result = await userModel.createUser(req.body);
    result.accessToken = jwtService.sign(result);


    res.status(200).json(result);
})

exports.login = catchError(async (req, res, next) => {
    const exisUser = await userModel.getUserByEmail(req.body.email)

    if(!exisUser){createError(401, "invalid email or password")}
    
    const passwordCheck = await hashService.comparePassword(req.body.password, exisUser.password )
    if(!passwordCheck){createError(401, "invalid email or password")}


    delete exisUser.password
    exisUser.accessToken = jwtService.sign(exisUser);

    

  res.status(200).json(exisUser);
});
