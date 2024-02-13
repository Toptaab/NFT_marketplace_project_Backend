const prisma = require("../api");

exports.createUser = (data) =>
  prisma.user.create({
    data,
    select: {
      id: true,
      userName: true,
      email: true,
      isAdmin: true,
      isVerify: true,
    },
  });

exports.getUserByEmail = (input) =>
  prisma.user.findFirst({ where: { email: input } });

exports.getUserByUserName = (input) =>
  prisma.user.findFirst({ where: { userName: input } });

exports.getUserByuserId = (input) =>
  prisma.user.findFirst({
    where: { userId: input },
    include: { wallet: true,
    nft:true,
  history:true,
seller:true,
buyer:true,
followers:true,
Collectiona },
  });
