import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function main() {

  const Churu = await ethers.getContractFactory("Churu");
  const churu = await Churu.deploy();

  await churu.deployed();

  // FIX : property address does not exist on type 'Churu'
  console.log("Churu deployed to:", "something here to find address");
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
