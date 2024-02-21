const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

const hashPassword = bcrypt.hashSync("123456", 10);

console.log(hashPassword);

const userData = [
  {
    userName: "toptaab",
    email: "toptaab@gmail.com",
    password: hashPassword,
    image: "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWVjU3NmTXZSY1VybXlkQllmUnlqcFJpc1lNR0RBWG1vQVdHUFlKUktXQTRY",
    isAdmin: true,
    isVerify: true,
  },
  {
    userName: "first",
    email: "first@gmail.com",
    password: hashPassword,
    image: "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVlETDRrbmZuVnRpOUJ5cmgxNnJ3MkVlZWNDeGZqY1BObUNDc1FqQWtLTEZG",
    isAdmin: true,
    isVerify: true,
  },
  {
    userName: "user1",
    email: "user1@gmail.com",
    password: hashPassword,
    image: "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWR0eEpZbkd0a21LS2RGRmpXM0c4NmJkelM1UVF3RlA1Y0Y0Tk1EampEM2hZ",
    isAdmin: false,
    isVerify: true,
  },
  {
    userName: "user2",
    email: "user2@gmail.com",
    password: hashPassword,
    isAdmin: false,
    isVerify: false,
  },
];

const tokenStandard = [{ name: "ERC-721" }, { name: "ERC-20" }];

const chain = [
  {
    name: "Ethereum",
    rpcUrl: "https://mainnet.infura.io/v3/",
    ChainId: 1,
    currencySymbol: "ETH",
    blockExplorerUrl: "https://etherscan.io",
  },
  {
    name: "BNB Chain",
    rpcUrl: "https://bsc-dataseed.binance.org/",
    ChainId: 56,
    currencySymbol: "BNB",
    blockExplorerUrl: "https://bscscan.com/",
  },
];

const wallet = [
  {
    walletAddress: "0xa34f4F6f3454b1DC730FA9C86e75763283497582",
    userId: 1,
  },
  {
    walletAddress: "0x1EbCE9218c05d0c2A3575d29Fc8F8b0f05ABAF9a",
    userId: 2,
  },
  {
    walletAddress: "0x2F7f119cD419AF18F8805661A4B3bB32612ce878",
    userId: 3,
  },
  {
    walletAddress: "0x241d73809Dc4e3ff1E198F570C944c18F5E96cA8",
    userId: 4,
  },
];

const crypto = [
  {
    chainId: 1,
    walletAddress: "0xa34f4F6f3454b1DC730FA9C86e75763283497582",
    name: "Ethereum",
    balance: 730.55,
  },
  {
    chainId: 1,
    walletAddress: "0x1EbCE9218c05d0c2A3575d29Fc8F8b0f05ABAF9a",
    name: "Ethereum",
    balance: 520.55,
  },
  {
    chainId: 1,
    walletAddress: "0x2F7f119cD419AF18F8805661A4B3bB32612ce878",
    name: "Ethereum",
    balance: 350.35,
  },
  {
    chainId: 1,
    walletAddress: "0x241d73809Dc4e3ff1E198F570C944c18F5E96cA8",
    name: "Ethereum",
    balance: 20.25,
  },
];

const category = [
  { name: "Art" },
  { name: "Gaming" },
  { name: "Music" },
  { name: "MemberShips" },
  { name: "Photography" },
];

const collections = [
  {
    name: "spacepunk",
    price: "7.32",
    chainId: 1,
    categoryId: 1,
    creatorId: 1,
    description: "Space Punk the most popular NFT",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWJWYnRRQWNrU3ozUlZ4REJtYjlTckNHbzlvbkZDUHhuYXMyVlA3RUhDcHA2",
  },
  {
    name: "space rider",
    price: "5.34",
    chainId: 1,
    categoryId: 1,
    creatorId: 2,
    description: "space rider the most popular NFT",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0h1cHpaVGZaSTg1ZEgtVmZqcHhMb3ppazhJdVMxdzRiT3dCaEpSNGVpQnRXcU5ZYzhnSWFlUXZwN011bzl1RzNYZGhOM0NqX01GWEhjTjQ4dWNiNWljRnhTWGM2Z1dfZDU0SnBfZz1zMTIw",
  },
  {
    name: "Aliens Space Club",
    price: "10.13",
    chainId: 1,
    categoryId: 1,
    creatorId: 3,
    description: "Aliens Space Club the most popular NFT",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWQzejR4Z0c0UHpHU3JXa1FaakxRcjlwUUFVa3lKdUJUUThtbmFOcUp1Tk5r",
  },
];

const tratis = [
  {
    collectionId: 1,
    name: "head",
  },
  {
    collectionId: 1,
    name: "body",
  },
  {
    collectionId: 1,
    name: "foot",
  },
  {
    collectionId: 2,
    name: "face",
  },
  {
    collectionId: 2,
    name: "shirt",
  },
  {
    collectionId: 3,
    name: "skin",
  },
  {
    collectionId: 3,
    name: "shirt",
  },
];

const nfts = [
  {
    collectionId: 1,
    name: "top 1st NFT",
    creatorId: 1,
    walletAddress: "0xa34f4F6f3454b1DC730FA9C86e75763283497582",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVRSY1JYbzZjWEJ5akhZSFRWeEdwYWc2dnBvY3JHM3J4alBDOVB4S0FBclI5LzYxNTkucG5n",
  },
  {
    collectionId: 1,
    name: "top 2nd NFT",
    creatorId: 1,
    walletAddress: "0xa34f4F6f3454b1DC730FA9C86e75763283497582",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVRSY1JYbzZjWEJ5akhZSFRWeEdwYWc2dnBvY3JHM3J4alBDOVB4S0FBclI5LzUwNTUucG5n",
  },
  {
    collectionId: 1,
    name: "top 3rd NFT",
    creatorId: 1,
    walletAddress: "0xa34f4F6f3454b1DC730FA9C86e75763283497582",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVRSY1JYbzZjWEJ5akhZSFRWeEdwYWc2dnBvY3JHM3J4alBDOVB4S0FBclI5LzQyMjYucG5n",
  },
  {
    collectionId: 1,
    name: "top 4th NFT",
    creatorId: 1,
    walletAddress: "0xa34f4F6f3454b1DC730FA9C86e75763283497582",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVRSY1JYbzZjWEJ5akhZSFRWeEdwYWc2dnBvY3JHM3J4alBDOVB4S0FBclI5LzI0OTQucG5n",
  },
  {
    collectionId: 1,
    name: "top 5th NFT",
    creatorId: 1,
    walletAddress: "0xa34f4F6f3454b1DC730FA9C86e75763283497582",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVRSY1JYbzZjWEJ5akhZSFRWeEdwYWc2dnBvY3JHM3J4alBDOVB4S0FBclI5LzMyODAucG5n",
  },
  {
    collectionId: 2,
    name: "first 1th NFT",
    creatorId: 2,
    walletAddress: "0x1EbCE9218c05d0c2A3575d29Fc8F8b0f05ABAF9a",
    image:
      "https://lh3.googleusercontent.com/76FyrmcWat4ciAHN81AihSdYknMWp0gIEFtddEcwT1FrAAv2bflfz07n3ae0DWBqQUO12yptasp_Oc8djoWzH8E0QjT8SFImTw=s400",
  },
  {
    collectionId: 2,
    name: "first 2nd NFT",
    creatorId: 2,
    walletAddress: "0x1EbCE9218c05d0c2A3575d29Fc8F8b0f05ABAF9a",
    image:
      "https://lh3.googleusercontent.com/nVPIiTYTGSUEXs1Ux31-AL8WaCbhrPP1hl8tAQDWK2ddo_XTkSXexNQ0tMxDjffCZdgjdibBasMeN1ImjcOtBd_zqujT_bxhAHI=s400",
  },
  {
    collectionId: 2,
    name: "first 3rd NFT",
    creatorId: 2,
    walletAddress: "0x1EbCE9218c05d0c2A3575d29Fc8F8b0f05ABAF9a",
    image:
      "https://lh3.googleusercontent.com/9r3OyuyaccUIQWZbwP8Jo3q-DCO8EiZZKqWN_Y5arwvXcOLJKMdwVPqfWrGURi9XXF0LBTlL0BKp7RckctbDKsvq2rIwNwA0RvE=s400",
  },
  {
    collectionId: 2,
    name: "first 4th NFT",
    creatorId: 2,
    walletAddress: "0x1EbCE9218c05d0c2A3575d29Fc8F8b0f05ABAF9a",
    image:
      "https://lh3.googleusercontent.com/1PNX78rW3yoWvQlBt7UmbjJQnzRamczGEX7EDiTLIxCULq7LET7uVXD9o4QsAM9BqDxl9e6onEWt8LKyonWIVcWTTBLO_uDH6w=s400",
  },
  {
    collectionId: 2,
    name: "first 5th NFT",
    creatorId: 2,
    walletAddress: "0x1EbCE9218c05d0c2A3575d29Fc8F8b0f05ABAF9a",
    image:
      "https://lh3.googleusercontent.com/GgybO2FShzielrew9Jb5jwLSH-jlDMRQLhmuNA03OUbqOadDMIFbsODB1Sz8doCPJQTyHioekbWa6UNN1xlesqVOYzKcvqe0Pqc=s400",
  },
  {
    collectionId: 3,
    name: "user1 1th NFT",
    creatorId: 3,
    walletAddress: "0x2F7f119cD419AF18F8805661A4B3bB32612ce878",
    image:
      "https://lh3.googleusercontent.com/ahSllBfrCmpTr1Y4oa0vUgYyQjFx6OEnzKQGhdPdn99DYl_D1SPgaR8UCxOQaZJFyB0e6b-BaEcDi1U-N6ZqvvxoidzQGcl8OE8=s400",
  },
  {
    collectionId: 3,
    name: "user1 2nd NFT",
    creatorId: 3,
    walletAddress: "0x2F7f119cD419AF18F8805661A4B3bB32612ce878",
    image:
      "https://lh3.googleusercontent.com/PL_FRNjYAuRI0X2ZaWFb3ljc7ZIGdnSb83H5rS3xDbQFOF9_o-ZWQ830YGYlmfYE-q3OMErykoYFNZFK-IPg0lh2dyyKbjeZdg=s400",
  },
  {
    collectionId: 3,
    name: "user1 3rd NFT",
    creatorId: 3,
    walletAddress: "0x2F7f119cD419AF18F8805661A4B3bB32612ce878",
    image:
      "https://lh3.googleusercontent.com/GFJ7WX6QXXizACZBov1kQJkC0QJWe-27jRJdZUn5Qx6mE7GTXC98RzAvSP_AaAJpEF40auHK9lLGqnAnsgDk6QVUZh5jDBtxT-l0=s400",
  },
  {
    collectionId: 3,
    name: "user1 4th NFT",
    creatorId: 3,
    walletAddress: "0x2F7f119cD419AF18F8805661A4B3bB32612ce878",
    image:
      "https://lh3.googleusercontent.com/Rkh6iCODTijhusaREWQ_aOdwb2N-qjr-PR_sRsRGWxGzT9BMXxXr_yPbzDTpo1hk4ziSQR0ZSKskzLs1nN-015-W4gHHDfbJvA=s400",
  },
  {
    collectionId: 3,
    name: "user1 5th NFT",
    creatorId: 3,
    walletAddress: "0x2F7f119cD419AF18F8805661A4B3bB32612ce878",
    image:
      "https://lh3.googleusercontent.com/He1YsG_OojwGiQv_K6zwytUIiWbiuoLO9wMhE9C2byQT3hEK7SxNvZCn8SBbfykdUIIPwPw8CB1So7CGTjzzgTWJlL5x8zqB6iOt=s400",
  },
];

const TraitAttribute = [
  {
    nftId: 1,
    traitId: 1,
    name: "red head",
  },
  {
    nftId: 1,
    traitId: 2,
    name: "blue body",
  },
  {
    nftId: 1,
    traitId: 3,
    name: "green foot",
  },
  {
    nftId: 2,
    traitId: 1,
    name: "blue head",
  },
  {
    nftId: 2,
    traitId: 2,
    name: "red body",
  },
  {
    nftId: 2,
    traitId: 3,
    name: "green foot",
  },
  {
    nftId: 3,
    traitId: 1,
    name: "red head",
  },
  {
    nftId: 3,
    traitId: 2,
    name: "blue body",
  },
  {
    nftId: 3,
    traitId: 3,
    name: "red foot",
  },
  {
    nftId: 4,
    traitId: 1,
    name: "red head",
  },
  {
    nftId: 4,
    traitId: 2,
    name: "blue body",
  },
  {
    nftId: 4,
    traitId: 3,
    name: "red foot",
  },
  {
    nftId: 5,
    traitId: 1,
    name: "blue head",
  },
  {
    nftId: 5,
    traitId: 2,
    name: "green body",
  },
  {
    nftId: 5,
    traitId: 3,
    name: "blue foot",
  },
  {
    nftId: 6,
    traitId: 4,
    name: "blue face",
  },
  {
    nftId: 6,
    traitId: 5,
    name: "green shirt",
  },
  {
    nftId: 7,
    traitId: 4,
    name: "red face",
  },
  {
    nftId: 7,
    traitId: 5,
    name: "blue shirt",
  },
  {
    nftId: 8,
    traitId: 4,
    name: "blue face",
  },
  {
    nftId: 8,
    traitId: 5,
    name: "blue shirt",
  },
  {
    nftId: 9,
    traitId: 4,
    name: "red face",
  },
  {
    nftId: 9,
    traitId: 5,
    name: "red shirt",
  },
  {
    nftId: 10,
    traitId: 4,
    name: "red face",
  },
  {
    nftId: 10,
    traitId: 5,
    name: "red shirt",
  },
  {
    nftId: 11,
    traitId: 6,
    name: "red skin",
  },
  {
    nftId: 11,
    traitId: 7,
    name: "red shirt",
  },
  {
    nftId: 12,
    traitId: 6,
    name: "blue skin",
  },
  {
    nftId: 12,
    traitId: 7,
    name: "red shirt",
  },
  {
    nftId: 13,
    traitId: 6,
    name: "blue skin",
  },
  {
    nftId: 13,
    traitId: 7,
    name: "green shirt",
  },
  {
    nftId: 14,
    traitId: 6,
    name: "green skin",
  },
  {
    nftId: 14,
    traitId: 7,
    name: "green shirt",
  },
  {
    nftId: 15,
    traitId: 6,
    name: "red skin",
  },
  {
    nftId: 15,
    traitId: 7,
    name: "red shirt",
  },
];

const saleList = [
  {
    sellerId: 1,
    nftId: 1,
    price: 50.45,
  },
  {
    sellerId: 1,
    nftId: 2,
    price: 40.42,
  },
  {
    sellerId: 2,
    nftId: 6,
    price: 30.47,
  },
  {
    sellerId: 2,
    nftId: 7,
    price: 15.26,
  },
  {
    sellerId: 2,
    nftId: 8,
    price: 7.12,
  },
  {
    sellerId: 3,
    nftId: 11,
    price: 7.5,
  },
  {
    sellerId: 3,
    nftId: 12,
    price: 21.68,
  },
  {
    sellerId: 3,
    nftId: 13,
    price: 34.21,
  },
  {
    sellerId: 3,
    nftId: 14,
    price: 54.2,
  },
];

const history = [
  {
    nftId: 1,
    collectionId: 1,
    creatorId: 1,
    sellerId: 1,
    buyerId: 2,
    price: 10.23,
  },
  {
    nftId: 1,
    collectionId: 1,
    creatorId: 1,
    sellerId: 2,
    buyerId: 1,
    price: 15.23,
  },
  {
    nftId: 1,
    collectionId: 1,
    creatorId: 1,
    sellerId: 1,
    buyerId: 3,
    price: 12.23,
  },
  {
    nftId: 1,
    collectionId: 1,
    creatorId: 1,
    sellerId: 3,
    buyerId: 1,
    price: 20.23,
  },
  {
    nftId: 1,
    collectionId: 1,
    creatorId: 1,
    sellerId: 3,
    buyerId: 1,
    price: 20.23,
  },
  {
    nftId: 3,
    collectionId: 1,
    creatorId: 1,
    sellerId: 1,
    buyerId: 3,
    price: 22.23,
  },
  {
    nftId: 3,
    collectionId: 1,
    creatorId: 1,
    sellerId: 3,
    buyerId: 2,
    price: 22.23,
  },
  {
    nftId: 3,
    collectionId: 1,
    creatorId: 1,
    sellerId: 2,
    buyerId: 1,
    price: 50.23,
  },
];

const relationship = [
  {
    followedId: 1,
    followerId: 2,
  },
  {
    followedId: 2,
    followerId: 3,
  },
  {
    followedId: 3,
    followerId: 1,
  },
];

async function run() {
  await prisma.user.createMany({ data: userData });
  await prisma.tokenStandard.createMany({ data: tokenStandard });
  await prisma.chain.createMany({ data: chain });
  await prisma.wallet.createMany({ data: wallet });
  await prisma.crypto.createMany({ data: crypto });
  await prisma.category.createMany({ data: category });
  await prisma.collection.createMany({ data: collections });
  await prisma.trait.createMany({ data: tratis });
  await prisma.nft.createMany({ data: nfts });
  await prisma.traitAttribute.createMany({ data: TraitAttribute });
  await prisma.saleList.createMany({ data: saleList });
  await prisma.history.createMany({ data: history });
  await prisma.relationship.createMany({ data: relationship });
}

run();
