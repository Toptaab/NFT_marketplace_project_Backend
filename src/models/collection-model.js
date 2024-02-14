const prisma = require("../api");

exports.getCollectionNameByName = (name) =>
  prisma.collection.findFirst({ where: { name } });

exports.createCollection = (data) =>
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
