import { expect } from "chai";
import { ethers } from "hardhat";
import { CuriousPawoneer } from "../typechain";
import key from "../config/key";
import hre from 'hardhat'

// NOTE : private state variables in contract not accessible in test code
// What should be test
// 1. minter : mint
// 1. burner : burn 
// 1. pauser : pauseChuru
// 1. desctructor : destructChuru
// 1. ether withdrawl : only owner

let curiousPawoneer : CuriousPawoneer; // type from typechain
// should deploy contract before each test
beforeEach(async function () {
  const contract = await ethers.getContractFactory("CuriousPawoneer");
  curiousPawoneer = await contract.deploy(
    key.CONSTRUCTOR.CURIOUSPAWONEER.churuAddr.HARDHAT, 
    key.CONSTRUCTOR.CURIOUSPAWONEER.nonce,
    key.CONSTRUCTOR.CURIOUSPAWONEER.cid
  );
  // deploy CP and attach it to address 19
  await (await curiousPawoneer.deployed()).attach(key.HARDHATNETWORK.account19);
})

describe("CuriousPawoneer.sol", async function () {
  // Test case 1 : PASS
  it('Should return contract name : Curious Pawoneer', async function () {
    expect(await curiousPawoneer.name()).to.equal("Curious Pawoneer")
  })

  // Test case 2 : NOT PASS => Error: VM Exception while processing transaction: reverted with reason string 'Enter a proper ether amount.'
  it("Token ID should be unique", async function() {
    // FIX : mint twice with the same token id
    await curiousPawoneer.mint(key.HARDHATNETWORK.account0, 1)
    await curiousPawoneer.mint(key.HARDHATNETWORK.account1, 1)
    expect(await curiousPawoneer.ownerOf(1)).not.to.equal(key.HARDHATNETWORK.account1)
  })

});
