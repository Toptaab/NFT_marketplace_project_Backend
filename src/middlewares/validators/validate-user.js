const Joi = require("joi");
const validate = require("./validater-service");

const updateProfileSchema = Joi.object({
  userName: Joi.string().trim().message({
    "string.empty": "Username is required",
    "any.required": "Username is required",
  }),
  email: Joi.string().email({ tlds: false }).trim().message({
    "string.empty": "email address is required",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabet and number",
      "any.required": "password is required",
    }),
});

exports.validateUpdateProfile = validate(updateProfileSchema)
