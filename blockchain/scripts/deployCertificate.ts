import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function main() {

  const Certificate = await ethers.getContractFactory("Certificate");
  const certificate = await Certificate.deploy();
  const deployedCertificate = certificate as any; // to find contract address
  await certificate.deployed();

  // deployed address : 0x5FbDB2315678afecb367f032d93F642f64180aa3
  console.log("Certificate deployed to:", deployedCertificate.address);
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
