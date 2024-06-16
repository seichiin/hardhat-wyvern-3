/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  OwnedUpgradeabilityProxy,
  OwnedUpgradeabilityProxyInterface,
} from "../../../../contracts/registry/proxy/OwnedUpgradeabilityProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "ProxyOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyType",
    outputs: [
      {
        internalType: "uint256",
        name: "proxyTypeId",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradeabilityOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506106dd806100206000396000f3fe6080604052600436106100705760003560e01c80634f1ef2861161004e5780634f1ef286146101895780635c60da1b1461023f5780636fde820214610254578063f1739cae1461026957610070565b8063025313a2146100fc5780633659cfe61461012d5780634555d5c914610162575b600061007a61029c565b90506001600160a01b0381166100d7576040805162461bcd60e51b815260206004820152601d60248201527f50726f787920696d706c656d656e746174696f6e207265717569726564000000604482015290519081900360640190fd5b60405136600082376000803683855af43d806000843e8180156100f8578184f35b8184fd5b34801561010857600080fd5b506101116102ab565b604080516001600160a01b039092168252519081900360200190f35b34801561013957600080fd5b506101606004803603602081101561015057600080fd5b50356001600160a01b03166102ba565b005b34801561016e57600080fd5b5061017761031d565b60408051918252519081900360200190f35b6101606004803603604081101561019f57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156101ca57600080fd5b8201836020820111156101dc57600080fd5b803590602001918460018302840111640100000000831117156101fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610322945050505050565b34801561024b57600080fd5b5061011161029c565b34801561026057600080fd5b5061011161047e565b34801561027557600080fd5b506101606004803603602081101561028c57600080fd5b50356001600160a01b031661048d565b6000546001600160a01b031690565b60006102b561047e565b905090565b6102c26102ab565b6001600160a01b0316336001600160a01b0316146103115760405162461bcd60e51b815260040180806020018281038252602981526020018061067f6029913960400191505060405180910390fd5b61031a8161057d565b50565b600290565b61032a6102ab565b6001600160a01b0316336001600160a01b0316146103795760405162461bcd60e51b815260040180806020018281038252602981526020018061067f6029913960400191505060405180910390fd5b610382826102ba565b6000306001600160a01b0316826040518082805190602001908083835b602083106103be5780518252601f19909201916020918201910161039f565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461041e576040519150601f19603f3d011682016040523d82523d6000602084013e610423565b606091505b5050905080610479576040805162461bcd60e51b815260206004820152601f60248201527f43616c6c206661696c65642061667465722070726f7879207570677261646500604482015290519081900360640190fd5b505050565b6001546001600160a01b031690565b6104956102ab565b6001600160a01b0316336001600160a01b0316146104e45760405162461bcd60e51b815260040180806020018281038252602981526020018061067f6029913960400191505060405180910390fd5b6001600160a01b0381166105295760405162461bcd60e51b815260040180806020018281038252602481526020018061065b6024913960400191505060405180910390fd5b7f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd96105526102ab565b604080516001600160a01b03928316815291841660208301528051918290030190a161031a81610612565b6000546001600160a01b03828116911614156105ca5760405162461bcd60e51b81526004018080602001828103825260268152602001806106356026913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b91a250565b600180546001600160a01b0319166001600160a01b039290921691909117905556fe50726f787920616c72656164792075736573207468697320696d706c656d656e746174696f6e4e6577206f776e65722063616e6e6f7420626520746865206e756c6c20616464726573734f6e6c79207468652070726f7879206f776e65722063616e2063616c6c2074686973206d6574686f64a2646970667358221220726008d21db9d033162d64e951f492a297e9efb10502609865ea187fc79daed464736f6c63430007050033";

type OwnedUpgradeabilityProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnedUpgradeabilityProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnedUpgradeabilityProxy__factory extends ContractFactory {
  constructor(...args: OwnedUpgradeabilityProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnedUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<OwnedUpgradeabilityProxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwnedUpgradeabilityProxy {
    return super.attach(address) as OwnedUpgradeabilityProxy;
  }
  override connect(signer: Signer): OwnedUpgradeabilityProxy__factory {
    return super.connect(signer) as OwnedUpgradeabilityProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnedUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as OwnedUpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnedUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnedUpgradeabilityProxy;
  }
}