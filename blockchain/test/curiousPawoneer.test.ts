import { expect } from "chai";
import { ethers } from "hardhat";

// FIX : Should provide a deploeyd Churu contract address 
const churuAddress = ""
const nounce = 0
const ipfsCid = ""

describe("CuriousPawoneer.sol", function () {
  it.skip("Should return a contract name", async function () {
    const CuriousPawoneer = await ethers.getContractFactory("CuriousPawoneer");
    const curiousPawoneer = await CuriousPawoneer.deploy(churuAddress, nounce, ipfsCid);
    await curiousPawoneer.deployed();

    // get contract name
    expect(await curiousPawoneer.name()).to.equal("CuriousPawoneer");
  });
});
