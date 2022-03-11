import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function main() {

  const Churu = await ethers.getContractFactory("Churu");
  const churu = await Churu.deploy();
  const deployedChuru = churu as any; // to find contract address
  await churu.deployed();

  // deployed address should be checked at etherscan : 
  console.log("Churu deployed to:", deployedChuru.address);
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
