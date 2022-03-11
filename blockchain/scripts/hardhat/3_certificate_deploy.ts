import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import key from "../../config/key";

async function main() {

  const Certificate = await ethers.getContractFactory("Certificate");
  // Certificate.sol requires a Curious Pawoneer contract address in constrcutor
  // The CP is deployed at account 19
  const certificate = await Certificate.deploy(key.HARDHATNETWORK.account19);

  // Deploy Certificate.sol to account 18(node 18)
  await (await certificate.deployed()).attach(key.HARDHATNETWORK.account18);

  // deployed address : 0x5FbDB2315678afecb367f032d93F642f64180aa3
  console.log("Certificate deployed to:", key.HARDHATNETWORK.account18);
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
