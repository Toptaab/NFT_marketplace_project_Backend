const Joi = require("joi");
const validate = require("./validater-service");

const registerSchema = Joi.object({
  userName: Joi.string().required().trim().messages({
    "string.empty": "Username is required",
    "any.required": "Username is required",
  }),
  email: Joi.string().email({ tlds: false }).required().trim().messages({
    "string.empty": "email address is required",
    "any.required": "email address is required",
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
  confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({
      "string.empty": "confirm password is required",
      "any.only": "password and confirm password did not match",
      "any.required": "confirm password is required",
    })
    .strip(),
});

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().trim().messages({
    "string.empty": "email address is required",
    "any.required": "email address is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "password is required",
    "any.required": "password is required",
  }),
});


exports.validateRegister = validate(registerSchema);
exports.validateLogin = validate(loginSchema);
