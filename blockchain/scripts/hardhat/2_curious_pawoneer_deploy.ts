import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import key from "../../config/key";

async function main() {
  const CuriousPawoneer = await ethers.getContractFactory("CuriousPawoneer");
  const curiousPawoneer = await CuriousPawoneer.deploy(
    key.CONSTRUCTOR.CURIOUSPAWONEER.churuAddr.HARDHAT, 
    key.CONSTRUCTOR.CURIOUSPAWONEER.nonce,
    key.CONSTRUCTOR.CURIOUSPAWONEER.cid
  );

  // hardhat network
  await (await curiousPawoneer.deployed()).attach(key.HARDHATNETWORK.account19);
  console.log("Curious Pawoneer deployed to:", key.HARDHATNETWORK.account19);
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
