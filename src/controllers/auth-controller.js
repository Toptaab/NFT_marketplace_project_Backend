const userModel = require("../models/user-model");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-servise");

exports.register = async (req, res, next) => {
try {

    req.body.password = await hashService.bcrypt(req.body.password);

    const result = await userModel.createUser(req.body);
  
  
    console.log(result)
  
  
    delete result.password;
    delete result.confirmPassword;
  
    result.asscesToken = jwtService.sign(result);
  

   

    res.status(200).json(result);
}catch(err){
    console.log(err)
}

};

exports.login = async (req, res, next) => {
  res.status(200).json({ message: "login" });
};
