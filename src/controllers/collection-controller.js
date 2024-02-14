const catchError = require("../utils/catch-error");
const collectionModel = require("../models/collection-model");
const createError = require("../utils/createError");

exports.createdCollectionController = catchError(async (req, res, next) => {
  const existCollectionName = await collectionModel.getCollectionNameByName(
    req.body.name
  );
  if (existCollectionName) {
    createError(401, "this name already has been used");
  }

  const result = await collectionModel.createCollection(req.body);

  res.status(200).json(result);
});

exports.updateCollectionPriceController = catchError(async (req, res, next) => {
  await collectionModel.updateCollectionPrice(
    req.params.collectionId,
    req.body.price
  );

  res.status(200).json({ message: "Updated collection's price success!!" });
});

exports.startMintCollectionController = catchError(async (req, res, next) => {
  await collectionModel.startMintCollection(req.params.collectionId);

  res.status(200).json({ message: "Start Mint Success!!" });
});
