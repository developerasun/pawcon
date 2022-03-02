import { expect } from "chai";
import { ethers } from "hardhat";
import key from "../config/key";

describe("CuriousPawoneer.sol", function () {
  it("Should return a contract name", async function () {
    const CuriousPawoneer = await ethers.getContractFactory("CuriousPawoneer");
    const curiousPawoneer = await CuriousPawoneer.deploy(
      key.CONSTRUCTOR.CURIOUSPAWONEER.churuAddr.HARDHAT, 
      key.CONSTRUCTOR.CURIOUSPAWONEER.nonce,
      key.CONSTRUCTOR.CURIOUSPAWONEER.cid
    );
    await curiousPawoneer.deployed();

    // get contract name
    expect(await curiousPawoneer.name()).to.equal("Curious Pawoneer");
  });
});

