const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const bcrypt = require("bcryptjs");

const hashPassword = bcrypt.hashSync("123456", 10);

console.log(hashPassword)

const userData = [
  {
    userName: "toptaab",
    email: "toptaab@gmail.com",
    password: hashPassword,
    isAdmin: true,
    isVerify: true,
  },
  {
    userName: "first",
    email: "first@gmail.com",
    password: hashPassword,
    isAdmin: true,
    isVerify: true,
  },
  {
    userName: "user1",
    email: "user1@gmail.com",
    password: hashPassword,
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
    tokenStandardId: 1,
    chainId: 1,
    walletAddress: "0xa34f4F6f3454b1DC730FA9C86e75763283497582",
    name: "Ethereum",
    balance: 100.55,
  },
  {
    tokenStandardId: 1,
    chainId: 1,
    walletAddress: "0x1EbCE9218c05d0c2A3575d29Fc8F8b0f05ABAF9a",
    name: "Ethereum",
    balance: 200.55,
  },
  {
    tokenStandardId: 1,
    chainId: 1,
    walletAddress: "0x2F7f119cD419AF18F8805661A4B3bB32612ce878",
    name: "Ethereum",
    balance: 50.35,
  },
  {
    tokenStandardId: 1,
    chainId: 1,
    walletAddress: "0x241d73809Dc4e3ff1E198F570C944c18F5E96cA8",
    name: "Ethereum",
    balance: 20.25,
  },

];

async function run( ) {
  await prisma.user.createMany({data:userData })
  await prisma.tokenStandard.createMany({data:tokenStandard })
  await prisma.chain.createMany({data:chain })
  await prisma.wallet.createMany({data:wallet })
  await prisma.crypto.createMany({data:crypto })
}

run()