const prisma = require("../api");

exports.getAllColletion = () => prisma.collection.findMany({include:{category:{select:{name:true}},history:{orderBy:{price:"asc"}},_count:{select:{history:true,Nfts:true}}}})

exports.getCollectionByCollectionId = (id) => prisma.collection.findFirst({where:{id},include:{creator:true,Nfts:{include:{SaleList:true,wallet:{include:{user:true}}}},chain:true,history:{orderBy:{price:"desc"}}}})

// exports.getAllColletion = () => prisma.collection.findMany({include: {Nfts: {include: {SaleList: true,wallet:{include:{user:true}}}}}})

exports.getCollectionByUserId = (creatorId) =>  prisma.collection.findMany({where:{creatorId},include:{Traits:true}})


exports.getCollectionNameByName = (name) =>
  prisma.collection.findFirst({ where: { name } });

exports.createCollection = async (data) =>
  prisma.collection.create({
    data: {
      name: data.name,
      creatorId: data.userId,
      price: data.price,
      chainid: data.chainid,
      description: data.description,
      categoryId: data.categoryId,
      Traits: {
        create: data.Traits,
      },
    },
  });

exports.startMintCollection = (id) =>
  prisma.collection.update({ data: { onMint: true },where:{id} });

exports.stopMintCollection = (id) =>
  prisma.collection.update({ data: { onMint: false },where:{id} });


exports.checkCollectionByUserId = (creatorId,id) => prisma.collection.findFirst({where:{AND:[{creatorId},{id}]}})

exports.updateCollectionById = (id,image) => prisma.collection.update({data:{image},where:{id}})

