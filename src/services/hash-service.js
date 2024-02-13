const bcrypt = require('bcryptjs')

exports.bcrypt = (input) => bcrypt.hash(input,10)

exports.comparePassword = (password, hashPassword) => bcrypt.compare(password,hashPassword)