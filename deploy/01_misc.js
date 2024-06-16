module.exports = async ({ getNamedAccounts, deployments, network }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const { save } = deployments;
  
    const WyvernAtomicizer = await deploy('WyvernAtomicizer', {
      from: deployer,
      log: true,
    });
  
    const WyvernStatic = await deploy('WyvernStatic', {
      from: deployer,
      args: [WyvernAtomicizer.address],
      log: true,
    });
  
    const StaticMarket = await deploy('StaticMarket', {
      from: deployer,
      log: true,
    });
  
    const isDevelopment = network.name === 'hardhat' || network.name === 'localhost';
    const isCoverage = network.name === 'coverage';
  
    if (!isDevelopment && !isCoverage) {
      save('deployed.' + network.name + '.WyvernAtomicizer', WyvernAtomicizer);
      save('deployed.' + network.name + '.WyvernStatic', WyvernStatic);
      save('deployed.' + network.name + '.StaticMarket', StaticMarket);
    }
  
    if (isDevelopment || isCoverage) {
      const TestERC20 = await deploy('TestERC20', {
        from: deployer,
        log: true,
      });
  
      const TestERC721 = await deploy('TestERC721', {
        from: deployer,
        log: true,
      });
  
      const TestAuthenticatedProxy = await deploy('TestAuthenticatedProxy', {
        from: deployer,
        log: true,
      });
  
      const TestERC1271 = await deploy('TestERC1271', {
        from: deployer,
        log: true,
      });
  
      const TestSmartContractWallet = await deploy('TestSmartContractWallet', {
        from: deployer,
        log: true,
      });
  
      if (!isDevelopment) {
        save('deployed.' + network.name + '.TestERC20', TestERC20);
        save('deployed.' + network.name + '.TestERC721', TestERC721);
        save('deployed.' + network.name + '.TestAuthenticatedProxy', TestAuthenticatedProxy);
        save('deployed.' + network.name + '.TestERC1271', TestERC1271);
        save('deployed.' + network.name + '.TestSmartContractWallet', TestSmartContractWallet);
      }
    }
  };