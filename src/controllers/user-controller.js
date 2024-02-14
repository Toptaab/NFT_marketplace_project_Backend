const catchError = require("../utils/catch-error");
const hashService = require("../services/hash-service");
const userModel = require("../models/user-model");
const createError = require("../utils/createError");
const jwtService = require("../services/jwt-servise");

exports.getAllAssetsController = catchError(async (req, res, next) => {
  const result = await userModel.getAllAssetsUserByUserId(+req.params.targetId);

  delete result.password;
  res.status(200).json(result);
});

exports.createWalletController = catchError(async (req, res, next) => {
  const existWallet = await userModel.getWalletByWalletAddress(req.body.walletAddress)

  if(existWallet){createError(402,"this wallet already has been used")}

  const result = await userModel.createWallet(req.body);

  res.status(200).json(result);
});

exports.updateUserPofileController = catchError(async (req, res, next) => {

  if (req.body.userName) {
    const existName = await userModel.getUserByUserName(req.body.userName);
    if (existName) {
      createError(402, "this username is already in used");
    }
  }

  if (req.body.email) {
    const existEmail = await userModel.getUserByEmail(req.body.email);
    if (existEmail) {
      createError(402, "this email is already in used");
    }
  }

  if (!req.body.password) {
    createError(400, "please enter password");
  }

  const user = await userModel.getUserByUserId(req.body.userId);

  const passwordCheck = await hashService.comparePassword(
    req.body.password,
    user.password
  );
  if (!passwordCheck) {
    createError(401, "invalid password");
  }

  delete req.body.password;
  delete req.body.userId;
  delete req.body.user;


  const result = await userModel.updateUser(user.id, req.body);

  delete result.password;

  result.accessToken = jwtService.sign(result);

  res.status(200).json(result);
});
