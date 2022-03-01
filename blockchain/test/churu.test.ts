import { expect } from "chai";
import { ethers } from "hardhat";

describe("Churu", function () {
  it("Should return a contract name", async function () {
    const Churu = await ethers.getContractFactory("Churu");
    const churu = await Churu.deploy();
    await churu.deployed();

    // get contract name
    expect(await churu.name()).to.equal("Churu");
  });
});
