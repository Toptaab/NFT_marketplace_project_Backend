const Joi = require("joi");
const validate = require("./validater-service");

const createCollectionSchema = Joi.object({
  name: Joi.string().required().trim().message({
    "string.empty": "name address is required",
    "any.required": "name address is required",
  }),
  price: Joi.number().positive().precision(2).required(),
  chainId: Joi.required(),
  Traits: Joi.any(),
  categoryId: Joi.number()
});

// const updateCollectionJoi


exports.createCollectionValidate = validate(createCollectionSchema)