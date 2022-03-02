import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import key from "../config/key";

async function main() {

  const CuriousPawoneer = await ethers.getContractFactory("CuriousPawoneer");
  const curiousPawoneer = await CuriousPawoneer.deploy(
    // should change based on network selection
    key.CONSTRUCTOR.CURIOUSPAWONEER.churuAddr.HARDHAT, 
    key.CONSTRUCTOR.CURIOUSPAWONEER.nonce,
    key.CONSTRUCTOR.CURIOUSPAWONEER.cid
  );

  const deployedCuriousPawoneer = curiousPawoneer as any;
  await curiousPawoneer.deployed();

  // deployed address : 0x5FbDB2315678afecb367f032d93F642f64180aa3
  console.log("Curious Pawoneer deployed to:", deployedCuriousPawoneer.address);
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
