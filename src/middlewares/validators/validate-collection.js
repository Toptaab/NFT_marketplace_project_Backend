const Joi = require("joi");
const validate = require("./validater-service");

const createCollectionSchema = Joi.object({
  name: Joi.string().required().trim().message({
    "string.empty": "email address is required",
    "any.required": "email address is required",
  }),
  price: Joi.number().positive().precision(2).required(),
  chainId: Joi.required(),
  traits: Joi.any()
});

// const updateCollectionJoi


exports.createCollectionValidate = validate(createCollectionSchema)