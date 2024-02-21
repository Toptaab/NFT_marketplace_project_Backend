const catchError = require("../utils/catch-error");
const historyModel = require('../models/history-model')


exports.getCountHistoryController = catchError(async (req,res,next) => {

    const result = await historyModel.getCountHistory()

    res.status(200).json(result)
})