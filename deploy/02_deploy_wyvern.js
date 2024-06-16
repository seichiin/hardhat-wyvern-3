const { setConfig } = require("../config.js");

const chainIds = {
  arbitrum: 421614,
};

const personalSignPrefixes = {
  default: "\x19Ethereum Signed Message:\n",
  klaytn: "\x19Klaytn Signed Message:\n",
  baobab: "\x19Klaytn Signed Message:\n",
};

module.exports = async ({ getNamedAccounts, deployments, network, ethers }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const personalSignPrefix =
    personalSignPrefixes[network.name] || personalSignPrefixes["default"];

  // Deploy WyvernRegistry
  const WyvernRegistry = await deploy("WyvernRegistry", {
    from: deployer,
    log: true,
  });

  // Deploy WyvernExchange with chainId, WyvernRegistry address, and personalSignPrefix
  const WyvernExchange = await deploy("WyvernExchange", {
    from: deployer,
    args: [
      chainIds[network.name],
      [WyvernRegistry.address, "0xa5409ec958C83C3f309868babACA7c86DCB077c1"],
      "0x" + Buffer.from(personalSignPrefix, "binary").toString("hex"),
    ],
    log: true,

    // pragma version conflicted
    // proxy: {
    //     execute: {
    //         methodName: "initialize",
    //         args: [],
    //     },
    //     proxyContract: "OpenZeppelinTransparentProxy",
    // },
  });

  if (network.name !== "hardhat" && network.name !== "localhost") {
    setConfig(
      `deployed.${network.name}.WyvernRegistry`,
      WyvernRegistry.address
    );
    setConfig(
      `deployed.${network.name}.WyvernExchange`,
      WyvernExchange.address
    );
  }

  const registry = await ethers.getContractAt(
    "WyvernRegistry",
    WyvernRegistry.address
  );
  await registry.grantInitialAuthentication(WyvernExchange.address);
};
