const prisma = require("../api");

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
      Traits: {
        create: data.traits,
      },
    },
  });

exports.startMintCollection = (id) =>
  prisma.collection.update({ data: { onMint: true },where:{id} });

exports.stopMintCollection = (id) =>
  prisma.collection.update({ data: { onMint: false },where:{id} });


exports.checkCollectionByUserId = (creatorId,id) => prisma.collection.findFirst({where:{AND:[{creatorId},{id}]}})

exports.updateCollectionById = (id,image) => prisma.collection.update({data:{image},where:{id}})

exports.getCollectionByCollectionId = (id) => prisma.collection.findFirst({where:{id}})
