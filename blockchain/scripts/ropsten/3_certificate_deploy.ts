import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import key from "../../config/key";

async function main() {

  const Certificate = await ethers.getContractFactory("Certificate");
  // Certificate.sol requires a Curious Pawoneer contract address in constrcutor
  // The CP is deployed at :
  const certificate = await Certificate.deploy("SHOULD BE CHANGED HERE");
  const deployedCertificate = certificate as any;

  await certificate.deployed();

  // deployed address should be checked at etherscan :
  console.log("Certificate deployed to:", deployedCertificate.address);
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
