const catchError = require("../utils/catch-error");
const assetModel = require("../models/asset-model");
const userModel = require("../models/user-model");
const createError = require("../utils/createError");
const collectionModel = require("../models/collection-model");
const uploadService = require("../services/uploadCloud-service");
const fs = require("fs");
const { removeBalance, addBalance } = require("../utils/calculateBalance");



exports.getAllNftController = catchError(async (req,res,next) =>{
const result = await assetModel.getAllNft()

  res.status(200).json(result)
})


exports.getCountNftController = catchError(async (req, res, next) => {
  const result = await assetModel.getAllNftCount();

  res.status(200).json(result);
});

exports.getNftController = catchError(async (req, res, next) => {
  const result = await assetModel.getNftByNftId(+req.params.assetId);

  res.status(200).json(result);
});

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

  let result;
console.log(req.body.TraitAttributes.length > 0)

//  if(req.body.TraitAttributes.length > 0){
  
//   }
//   else{ 
//     delete req.body.TraitAttributes
//     delete req.body.tokenId

    // result = await assetModel.createNftwithNotraits(req.body)
//   }

  result = await assetModel.createNftWithTraits(req.body)

  res.status(200).json(result);
});

exports.updateNftImage = catchError(async (req, res, next) => {
  const checkNftOwner = await assetModel.checkNftByUserId(
    req.body.userId,
    +req.params.assetId
  );
  if (!checkNftOwner) {
    createError(403, "Unauthorized on this NFT");
  }
  req.body.image = await uploadService.uploadCloud(
    req.file.path,
    "NFT-marketplace/Nfts"
  );

  await assetModel.updateNftImage(+req.params.assetId, req.body.image);

  fs.unlink(req.file.path, () => {});
  res.status(200).json("update NFT image Sucess");
});

exports.sellNftController = catchError(async (req, res, next) => {
  const checkNftOwner = await assetModel.checkNftByUserId(
    +req.body.userId,
    +req.params.assetId
  );
  if (!checkNftOwner) {
    createError(403, "Unauthorized on this NFT");
  }

  const existSalelist = await assetModel.checkSalelist(+req.params.assetId);
  if (existSalelist) {
    createError(403, "This NFT has already been on salelist ");
  }

  await assetModel.changeNftSaleStatusToSell(+req.params.assetId);

  await assetModel.sellNft(
    req.body.userId,
    +req.params.assetId,
    req.body.price
  );

  res.status(200).json({ message: "sales success" });
});

exports.updatePriceController = catchError(async (req, res, next) => {
  const checkNftOwner = await assetModel.checkNftByUserId(
    +req.body.userId,
    +req.params.assetId
  );
  if (!checkNftOwner) {
    createError(403, "Unauthorized on this NFT");
  }
  const existSalelist = await assetModel.checkSalelist(+req.params.assetId);
  if (!existSalelist) {
    createError(403, "This NFT is not on salelist");
  }

  await assetModel.updatePrice(+req.params.assetId, req.body.price);

  res.status(200).json({ message: "Update Success" });
});

exports.cancelSaleNftController = catchError(async (req, res, next) => {
  const checkNftOwner = await assetModel.checkNftByUserId(
    +req.body.userId,
    +req.params.assetId
  );
  if (!checkNftOwner) {
    createError(403, "Unauthorized on this NFT");
  }

  const existSalelist = await assetModel.checkSalelist(+req.params.assetId);
  if (!existSalelist) {
    createError(403, "This NFT is not on salelist");
  }

  await assetModel.changeNftSaleStatusToNotSell(+req.params.assetId);

  await assetModel.deleteSellNft(+req.params.assetId);

  res.status(200).json({ message: "Cancel Success" });
});

exports.buyNftController = catchError(async (req, res, next) => {


  const existSalelist = await assetModel.checkSalelist(+req.params.assetId);
  if (!existSalelist) {
    createError(403, "This NFT is not on salelist");
  }


  const buyerWallet = await userModel.getWalletByUserId(+req.body.userId);

  const sellerWallet = await userModel.getWalletByUserId(
    existSalelist.sellerId
  );

  if(buyerWallet.userId === sellerWallet.userId){createError(403,"Can't buy your own NFT")}


  const newBuyerBalance = removeBalance(
    buyerWallet.Cryptos[0].balance,
    existSalelist.price
  );

  const newSellerBalance = addBalance(
    sellerWallet.Cryptos[0].balance,
    existSalelist.price
  );

  await assetModel.changeNftSaleStatusToNotSell(+req.params.assetId);

  await assetModel.deleteSellNft(+req.params.assetId);

  await userModel.updateBalanceByWalletAddress(
    buyerWallet.Cryptos[0].id,
    newBuyerBalance
  );
  await userModel.updateBalanceByWalletAddress(
    sellerWallet.Cryptos[0].id,
    newSellerBalance
  );

  await assetModel.updateNftWalletaddres(
    buyerWallet.walletAddress,
    +req.params.assetId
  );

  res.status(200).json({message: "Buy Success"});
});
