const { expect } = require("chai");

describe("WyvernStatic Contract", function () {
  let WyvernAtomicizer;
  let WyvernStatic;
  let atomicizerInstance;
  let staticInstance;

  before(async function () {
    // Deploy contracts and fetch instances
    [WyvernAtomicizer, WyvernStatic] = await Promise.all([
      ethers.getContractFactory("WyvernAtomicizer"),
      ethers.getContractFactory("WyvernStatic"),
    ]);

    atomicizerInstance = await WyvernAtomicizer.deploy();
    staticInstance = await WyvernStatic.deploy(atomicizerInstance.address); // Deploy WyvernStatic with atomicizer address
  });

  it("is deployed", async function () {
    expect(staticInstance.address).to.not.equal(ethers.constants.AddressZero);
  });

  it("has the correct atomicizer address", async function () {
    const actualAtomicizerAddress = await staticInstance.atomicizer();
    expect(actualAtomicizerAddress).to.equal(atomicizerInstance.address);
  });
});
