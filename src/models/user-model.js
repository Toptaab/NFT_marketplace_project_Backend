const prisma = require("../api");


exports.getCountUser = () => prisma.user.aggregate({_count:{id:true}})

exports.getMe = (id) => prisma.user.findFirst({where:{id}})

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

exports.getAllAssetsUserByUserId = (input) =>
  prisma.user.findFirst({
    where: { id: input },
    include: {
      Wallets: { include: { Cryptos: { include: { chain: true } } } },
      Nfts: true,
      history: true,
      sellers: true,
      buyers: true,
      Relationship: true,
      Collections: {include: {Nfts: {include: {SaleList: true}}}},
    },
  });

exports.createWallet = (data) => prisma.wallet.create({ data });

exports.getUserByUserId = (id) =>
  prisma.user.findFirst({
    where: { id },
  });

exports.updateUser = (id, data) =>
  prisma.user.update({
    data,
    where: { id },
  });

exports.getWalletByWalletAddress = (walletAddress) =>
  prisma.wallet.findFirst({ where: { walletAddress } });

exports.getWalletByUserId = (userId) =>
  prisma.wallet.findFirst({ where: { userId },include:{Cryptos:true} });



exports.updateBalanceByWalletAddress = (id,balance) => prisma.crypto.update({where:{id},data:{balance}})
