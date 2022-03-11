import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import key from "../../config/key";

async function main() {
  const CuriousPawoneer = await ethers.getContractFactory("CuriousPawoneer");
  const curiousPawoneer = await CuriousPawoneer.deploy(
    key.CONSTRUCTOR.CURIOUSPAWONEER.churuAddr.ROPSTEN, 
    key.CONSTRUCTOR.CURIOUSPAWONEER.nonce,
    key.CONSTRUCTOR.CURIOUSPAWONEER.cid
  );

  // ropsten network
  const deployedCuriousPawoneer = curiousPawoneer as any
  await curiousPawoneer.deployed();

  // deployed address should be checked at etherscan :
  console.log("Curious Pawoneer deployed to", deployedCuriousPawoneer.address)
}

// Hardhat recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
