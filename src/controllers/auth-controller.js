const userModel = require("../models/user-model");
const hashService = require("../services/hash-service");
const jwt = require("../services/jwt-servise");
const catchError = require("../utils/catch-error")
const createError =require('../utils/createError')

exports.register = catchError(async (req,res,next)=> {
  const exisEmail = await userModel.getUserByEmail(req.body.email)
  if(exisEmail){createError(409,"this email is already in used")}

  const existUser = await userModel.getUserByUserName(req.body.userName)
  if(existUser){createError(409,"this username is already in used")}


    req.body.password = await hashService.bcrypt(req.body.password);
    const result = await userModel.createUser(req.body);
    result.accessToken = jwt.sign(result.id);


    res.status(200).json(result);
})

exports.login = catchError(async (req, res, next) => {
    const existUser = await userModel.getUserByEmail(req.body.email)

    if(!existUser){createError(401, "invalid email or password")}
    
    const passwordCheck = await hashService.comparePassword(req.body.password, existUser.password )
    if(!passwordCheck){createError(401, "invalid email or password")}

    delete existUser.password
    existUser.accessToken = jwt.sign(existUser.id);

    

  res.status(200).json(existUser);
});
