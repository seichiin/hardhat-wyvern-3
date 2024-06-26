/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OwnableDelegateProxy,
  OwnableDelegateProxyInterface,
} from "../../../contracts/registry/OwnableDelegateProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "initialImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
  "0x608060405234801561001057600080fd5b506040516109e33803806109e38339818101604052606081101561003357600080fd5b8151602083015160408085018051915193959294830192918464010000000082111561005e57600080fd5b90830190602082018581111561007357600080fd5b825164010000000081118282018810171561008d57600080fd5b82525081516020918201929091019080838360005b838110156100ba5781810151838201526020016100a2565b50505050905090810190601f1680156100e75780820380516001836020036101000a031916815260200191505b506040525050506100fd836101f060201b60201c565b61010682610212565b6000826001600160a01b0316826040518082805190602001908083835b602083106101425780518252601f199092019160209182019101610123565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146101a2576040519150601f19603f3d011682016040523d82523d6000602084013e6101a7565b606091505b50509050806101e75760405162461bcd60e51b815260040180806020018281038252602a8152602001806109b9602a913960400191505060405180910390fd5b505050506102a7565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b038281169116141561025f5760405162461bcd60e51b81526004018080602001828103825260268152602001806109936026913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b91a250565b6106dd806102b66000396000f3fe6080604052600436106100705760003560e01c80634f1ef2861161004e5780634f1ef286146101895780635c60da1b1461023f5780636fde820214610254578063f1739cae1461026957610070565b8063025313a2146100fc5780633659cfe61461012d5780634555d5c914610162575b600061007a61029c565b90506001600160a01b0381166100d7576040805162461bcd60e51b815260206004820152601d60248201527f50726f787920696d706c656d656e746174696f6e207265717569726564000000604482015290519081900360640190fd5b60405136600082376000803683855af43d806000843e8180156100f8578184f35b8184fd5b34801561010857600080fd5b506101116102ab565b604080516001600160a01b039092168252519081900360200190f35b34801561013957600080fd5b506101606004803603602081101561015057600080fd5b50356001600160a01b03166102ba565b005b34801561016e57600080fd5b5061017761031d565b60408051918252519081900360200190f35b6101606004803603604081101561019f57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156101ca57600080fd5b8201836020820111156101dc57600080fd5b803590602001918460018302840111640100000000831117156101fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610322945050505050565b34801561024b57600080fd5b5061011161029c565b34801561026057600080fd5b5061011161047e565b34801561027557600080fd5b506101606004803603602081101561028c57600080fd5b50356001600160a01b031661048d565b6000546001600160a01b031690565b60006102b561047e565b905090565b6102c26102ab565b6001600160a01b0316336001600160a01b0316146103115760405162461bcd60e51b815260040180806020018281038252602981526020018061067f6029913960400191505060405180910390fd5b61031a8161057d565b50565b600290565b61032a6102ab565b6001600160a01b0316336001600160a01b0316146103795760405162461bcd60e51b815260040180806020018281038252602981526020018061067f6029913960400191505060405180910390fd5b610382826102ba565b6000306001600160a01b0316826040518082805190602001908083835b602083106103be5780518252601f19909201916020918201910161039f565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461041e576040519150601f19603f3d011682016040523d82523d6000602084013e610423565b606091505b5050905080610479576040805162461bcd60e51b815260206004820152601f60248201527f43616c6c206661696c65642061667465722070726f7879207570677261646500604482015290519081900360640190fd5b505050565b6001546001600160a01b031690565b6104956102ab565b6001600160a01b0316336001600160a01b0316146104e45760405162461bcd60e51b815260040180806020018281038252602981526020018061067f6029913960400191505060405180910390fd5b6001600160a01b0381166105295760405162461bcd60e51b815260040180806020018281038252602481526020018061065b6024913960400191505060405180910390fd5b7f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd96105526102ab565b604080516001600160a01b03928316815291841660208301528051918290030190a161031a81610612565b6000546001600160a01b03828116911614156105ca5760405162461bcd60e51b81526004018080602001828103825260268152602001806106356026913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b91a250565b600180546001600160a01b0319166001600160a01b039290921691909117905556fe50726f787920616c72656164792075736573207468697320696d706c656d656e746174696f6e4e6577206f776e65722063616e6e6f7420626520746865206e756c6c20616464726573734f6e6c79207468652070726f7879206f776e65722063616e2063616c6c2074686973206d6574686f64a2646970667358221220d9c2ab70e40cc8b31c2006cc5081e3aa2be01683537f8a17da708ba7c8d946dc64736f6c6343000705003350726f787920616c72656164792075736573207468697320696d706c656d656e746174696f6e4f776e61626c6544656c656761746550726f7879206661696c656420696d706c656d656e746174696f6e";

type OwnableDelegateProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnableDelegateProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnableDelegateProxy__factory extends ContractFactory {
  constructor(...args: OwnableDelegateProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    initialImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnableDelegateProxy> {
    return super.deploy(
      owner,
      initialImplementation,
      data,
      overrides || {}
    ) as Promise<OwnableDelegateProxy>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    initialImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      owner,
      initialImplementation,
      data,
      overrides || {}
    );
  }
  override attach(address: string): OwnableDelegateProxy {
    return super.attach(address) as OwnableDelegateProxy;
  }
  override connect(signer: Signer): OwnableDelegateProxy__factory {
    return super.connect(signer) as OwnableDelegateProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableDelegateProxyInterface {
    return new utils.Interface(_abi) as OwnableDelegateProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnableDelegateProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnableDelegateProxy;
  }
}
