const bcrypt = require('bcryptjs')

exports.bcrypt = (input) => bcrypt.hash(input,10)