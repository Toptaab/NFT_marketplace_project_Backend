const createError = require("./createError")

exports.removeBalance = (balance, amount) => {
    if(+balance < +amount){createError(403,"you dont have enough Balance")}
 return (+balance )- (+amount)

}


exports.addBalance = (balance, amount) => {
 return (+balance ) + (+amount)

}