const prisma = require('../api')



exports.createUser =  (data)=>prisma.user.create({data})