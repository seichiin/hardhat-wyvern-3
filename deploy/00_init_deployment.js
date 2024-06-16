const { setConfig } = require('../config.js');

module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const Migrations = await deploy('Migrations', {
    from: deployer,
    log: true,
  });

  if (network.name !== 'hardhat' && network.name !== 'localhost') {
    setConfig(`deployed.${network.name}.Migrations`, Migrations.address);
  }
};