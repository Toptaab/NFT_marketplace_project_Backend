const prisma = require("../api");



exports.getAllNft = () => prisma.nft.findMany({include:{collection:{select:{category:{select:{name:true}}}},wallet:{include:{user:true}},SaleList:true}})


exports.getAllNftCount = () => prisma.nft.aggregate({_count:{id:true}})


exports.getNftByNftId = (id) => prisma.nft.findFirst({where:{id},include:{creator:true,collection:true,chain:true,history:true,wallet:{include:{user:true}},SaleList:true,TraitAttributes:{include:{trait:true}} }})



exports.getAllNftByCollectionId = (collectionId) => prisma.nft.findMany({where:{collectionId}})


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

exports.checkNftByUserId = (userId, id) => prisma.nft.findFirst({where:{AND:[{wallet:{userId}},{id}]}})


exports.updateNftImage = (id,image) => prisma.nft.update({data:{image},where:{id}})


exports.sellNft = (sellerId,nftId,price) => prisma.saleList.create({data:{
sellerId,nftId,price
}})

exports.deleteSellNft = (nftId) => prisma.saleList.delete({where:{nftId}})


exports.changeNftSaleStatusToSell = (id) => prisma.nft.update({data:{isOnsale:true},where:{id}})

exports.changeNftSaleStatusToNotSell = (id) => prisma.nft.update({data:{isOnsale:false},where:{id}})



exports.checkSalelist = (nftId) => prisma.saleList.findFirst({where:{nftId}})


exports.updatePrice = (nftId,price) => prisma.saleList.update({data:{price},where:{nftId}})


exports.updateNftWalletaddres = (walletAddress,id) => prisma.nft.update({data:{walletAddress},where:{id}})