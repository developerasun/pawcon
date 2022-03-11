import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import key from "../../config/key";

async function main() {

  const Churu = await ethers.getContractFactory("Churu");
  const churu = await Churu.deploy();
  const deployedChuru = churu as any; // to find contract address
  await (await churu.deployed()).attach(key.HARDHATNETWORK.account0);

  // deployed address : 0x5FbDB2315678afecb367f032d93F642f64180aa3
  console.log("Churu deployed to:", deployedChuru.address);
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
