const { ethers } = require('hardhat')
const { expect } = require("chai");


describe("WyvernAtomicizer", function () {
  let WyvernAtomicizer;

  it("should be deployed", async function () {
    WyvernAtomicizer = (await ethers.getContractFactory("WyvernAtomicizer"));
    const contract = await WyvernAtomicizer.deploy()
    expect(contract.address).to.not.equal(0); // Check if the contract is deployed
  });
});