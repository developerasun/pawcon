import { expect } from "chai";
import { ethers } from "hardhat";
import { keccak256 } from "ethers/lib/utils";
import hre from 'hardhat'
import key from "../config/key";

// NOTE : private state variables in contract not accessible in test code

// What should be test
// 1. minter : mint
// 1. burner : burn 
// 1. pauser : pauseChuru
// 1. desctructor : destructChuru
// 1. ether withdrawl : only owner

// accounts from hardhat network with command 'npx hardhat node'
const account = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
const account2 = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"

describe("Churu.sol", function () {
  it("Should return a contract name", async function () {
    const Churu = await ethers.getContractFactory("Churu");
    const churu = await Churu.deploy();
    await churu.deployed();

    // get contract name
    expect(await churu.name()).to.equal("Churu");
  });
});

describe("Minter role", function() {
  it("Only minter can mint", async function() {
    const Churu = await ethers.getContractFactory("Churu");
    const churu = await Churu.deploy();
    await churu.deployed();
    
    // TIP : use solidityKeccak256 to hash role name(otherwise test will fail)
    await churu.grantRole(ethers.utils.solidityKeccak256(['string'],["MINTER_ROLE"]), account) // grant minter role
    const hasMinterRole = await churu.hasRole(ethers.utils.solidityKeccak256(['string'],["MINTER_ROLE"]), account) // grant minter role
    console.log(hasMinterRole) // true
    await churu.mint(account2, 100) // mint 100 churu to account 2

    // balance should be 100
    expect(await churu.balanceOf(account2)).equal(100, "not equal")
  })
})

describe("Burner role", function() {
  it("Only Burner can burn", async function() {
    const Churu = await ethers.getContractFactory("Churu");
    const churu = await Churu.deploy();
    await churu.deployed();
    await churu.grantRole(ethers.utils.solidityKeccak256(['string'],["BURNER_ROLE"]), account) // grant burner role
    await churu.burn(account, 100) // burn 100 churu

    expect(await churu.balanceOf(account)).equal(999999900, "not equal")
  })
})

describe("Pauser role", function() {
  it("Only Pauser can pause", async function() {
    const Churu = await ethers.getContractFactory("Churu");
    const churu = await Churu.deploy();
    await churu.deployed();

    await churu.grantRole(ethers.utils.solidityKeccak256(['string'],["PAUSER_ROLE"]), account)
    await churu.grantRole(ethers.utils.solidityKeccak256(['string'],["MINTER_ROLE"]), account)
    await churu.pauseChuru() // pause contract

    // FIX : chai not throwing err
    expect(await churu.mint(account, 100)).to.throw('Pausable: paused') // should throw error
  })
})

describe("Destructor role", function() {
  it.skip("Only destructor can desctruct", async function() {
    const Churu = await ethers.getContractFactory("Churu");
    const churu = await Churu.deploy();
    await churu.deployed();
    await churu.grantRole(ethers.utils.solidityKeccak256(['string'],["DESTRUCTOR_ROLE"]), account)
    await churu.destructChuru(account2) // disable contract and move ethers to the address

     // FIX : chai not throwing err
    expect(await churu.balanceOf(account2)).to.throw() // should have ethers
  })
})

describe("Withdrawl zone", function() {
  it.skip("Should withdraw eth from contract", async function() {
    const Churu = await ethers.getContractFactory("Churu");
    const churu = await Churu.deploy();
    const deployedChuru = churu as any;
    await churu.deployed();

    // FIX : Only owner VM Exception
    await churu.withdraw();
    expect(await churu.balanceOf(deployedChuru.address)).equal(0)
  })
})

