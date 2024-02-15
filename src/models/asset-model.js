const prisma = require("../api");

exports.getAllNftByCollectionId = (collectionId) => prisma.nft.findMany({where:{collectionId},orderBy:{tokenId:"desc"}})


exports.createNft = (data) => prisma.nft.create({
    data:{
        collectionId: data.collectionId,
        walletAddress: data.walletAddress,
        chainId: data.chainId,
        creatorId: data.userId,
        tokenId:data.tokenId,
        name:data.name,
        TraitAttributes:{
            create: data.TraitAttributes
        }
    }
})

exports.checkNftByUserId = (creatorId, id) => prisma.nft.findFirst({where:{AND:[{creatorId},{id}]}})


exports.updateNftImage = (id,image) => prisma.nft.update({data:{image},where:{id}})


exports.sellNft = (sellerId,nftId,price) => prisma.saleList.create({data:{
sellerId,nftId,price
}})

exports.changeNftSaleStatusToSell = (id) => prisma.nft.update({data:{isOnSale:true},where:{id}})

exports.checkMintNftByNftId = (id) => prisma.nft.findFirst({where:{id}})