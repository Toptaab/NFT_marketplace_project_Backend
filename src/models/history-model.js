const prisma = require('../api')


exports.getCountHistory = () => prisma.history.aggregate({_count:{id:true}})