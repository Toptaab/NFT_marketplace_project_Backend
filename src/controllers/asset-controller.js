const catchError = require("../utils/catch-error");
const assetModel = require("../models/asset-model");
const userModel = require("../models/user-model");
const createError = require("../utils/createError");
const collectionModel = require("../models/collection-model");
const uploadService = require("../services/uploadCloud-service");
const fs = require("fs");

exports.createNft = catchError(async (req, res, next) => {
  const { walletAddress, userId } = await userModel.getWalletByUserId(
    req.body.userId
  );
  if (userId != req.body.userId) {
    createError(402, "Please connect wallet or re login");
  }
  req.body.walletAddress = walletAddress;

  const { chainId } = await collectionModel.getCollectionByCollectionId(
    req.body.collectionId
  );
  req.body.chainId = chainId;

  const result = await assetModel.createNft(req.body);

  res.status(200).json(result);
});

exports.updateNftImage = catchError(async (req, res, next) => {
  const checkNftOwner = await assetModel.checkNftByUserId(
    req.body.userId,
    +req.params.nftId
  );
  if (!checkNftOwner) {
    createError(403, "Unauthorized on this NFT");
  }
  req.body.image = await uploadService.uploadCloud(req.file.path,"NFT-marketplace/Nfts");

  await assetModel.updateNftImage(+req.params.nftId, req.body.image);

  fs.unlink(req.file.path, () => {});
  res.status(200).json("update NFT image Sucess");
});

exports.sellNftController = catchError(async (req, res, next) => {
  const checkNftOwner = await assetModel.checkNftByUserId(
    req.body.userId,
    +req.params.nftId
  );
  if (!checkNftOwner) {
    createError(403, "Unauthorized on this NFT");
  }

  const {isMint} = await assetModel.checkMintNftByNftId(+req.params.nftId);
  if(!isMint){createError(402,"This NFT is unmint")}

  await assetModel.changeNftSaleStatusToSell(+req.params.nftId)

  await assetModel.sellNft(req.body.userId,+req.params.nftId,req.body.price)



  res.status(200).json({ message: 'sales success'});
});
