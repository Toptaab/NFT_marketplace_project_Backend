const catchError = require("../utils/catch-error");
const hashService = require("../services/hash-service");
const userModel = require("../models/user-model");
const createError = require("../utils/createError");
const uploadService = require("../services/uploadCloud-service");
const fs = require("fs");


exports.addBalanceController = catchError(async (req,res,next) => {

const wallet = await userModel.getWalletByUserId(req.body.userId)

const newBalance = +wallet?.Cryptos[0]?.balance + +req.body.balance


const result =  await userModel.updateBalanceByWalletAddress(wallet?.Cryptos[0]?.id,newBalance)


  res.status(200).json(result);
})

exports.getAllUserController = catchError(async (req, res, next) => {
  const result = await userModel.getAllUser();

  res.status(200).json(result);
});

exports.getCountUserController = catchError(async (req, res, next) => {
  const result = await userModel.getCountUser();

  res.status(200).json(result);
});

exports.getMeController = catchError(async (req, res, next) => {
  const result = await userModel.getMe(req.body.userId);

  res.status(200).json(result);
});

exports.getAllAssetsController = catchError(async (req, res, next) => {
  const result = await userModel.getAllAssetsUserByUserId(+req.params.targetId);

  delete result.password;
  res.status(200).json(result);
});

exports.createWalletController = catchError(async (req, res, next) => {
  const existWallet = await userModel.getWalletByWalletAddress(
    req.body.walletAddress
  );

  if (existWallet) {
    createError(402, "this wallet already has been used");
  }

  const result = await userModel.createWallet(
    req.body.walletAddress,
    req.body.userId
  );

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

  console.log(req.body);

  delete req.body.password;
  delete req.body.userId;
  delete req.body.user;

  const result = await userModel.updateUser(user.id, req.body);

  delete result.password;

  res.status(200).json(result);
});

exports.updateUserPofileImageController = catchError(async (req, res, next) => {


  req.body.image = await uploadService.uploadCloud(
    req.file.path,
    "NFT-marketplace/profilePicture"
  );

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
  


  const result = await userModel.updateUser(user.id, req.body);

  fs.unlink(req.file.path, () => {});

  res.status(200).json(result);
});
