/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StaticERC721,
  StaticERC721Interface,
} from "../../../contracts/static/StaticERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "extra",
        type: "bytes",
      },
      {
        internalType: "address[7]",
        name: "addresses",
        type: "address[7]",
      },
      {
        internalType: "enum AuthenticatedProxy.HowToCall[2]",
        name: "howToCalls",
        type: "uint8[2]",
      },
      {
        internalType: "uint256[6]",
        name: "uints",
        type: "uint256[6]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "counterdata",
        type: "bytes",
      },
    ],
    name: "swapOneForOneERC721",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "extra",
        type: "bytes",
      },
      {
        internalType: "address[7]",
        name: "addresses",
        type: "address[7]",
      },
      {
        internalType: "enum AuthenticatedProxy.HowToCall[2]",
        name: "howToCalls",
        type: "uint8[2]",
      },
      {
        internalType: "uint256[6]",
        name: "uints",
        type: "uint256[6]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "counterdata",
        type: "bytes",
      },
    ],
    name: "swapOneForOneERC721Decoding",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "extra",
        type: "bytes",
      },
      {
        internalType: "address[7]",
        name: "addresses",
        type: "address[7]",
      },
      {
        internalType: "enum AuthenticatedProxy.HowToCall",
        name: "howToCall",
        type: "uint8",
      },
      {
        internalType: "uint256[6]",
        name: "",
        type: "uint256[6]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "transferERC721Exact",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f51806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063883ee43014610046578063b6c8184b14610288578063ba3527431461041a575b600080fd5b610276600480360361024081101561005d57600080fd5b810190602081018135600160201b81111561007757600080fd5b82018360208201111561008957600080fd5b803590602001918460018302840111600160201b831117156100aa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040805160e081810190925293969594818101949350915060079083908390808284376000920191909152505060408051808201825292959493818101939250906002908390839080828437600092019190915250506040805160c08181019092529295949381810193925090600690839083908082843760009201919091525091949392602081019250359050600160201b81111561017d57600080fd5b82018360208201111561018f57600080fd5b803590602001918460018302840111600160201b831117156101b057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561020257600080fd5b82018360208201111561021457600080fd5b803590602001918460018302840111600160201b8311171561023557600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061064a945050505050565b60408051918252519081900360200190f35b610418600480360361020081101561029f57600080fd5b810190602081018135600160201b8111156102b957600080fd5b8201836020820111156102cb57600080fd5b803590602001918460018302840111600160201b831117156102ec57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040805160e08181019092529396959481810194935091506007908390839080828437600092019190915250506040805160c0818101909252929560ff853516959094909360e08201935091602090910190600690839083908082843760009201919091525091949392602081019250359050600160201b8111156103a457600080fd5b8201836020820111156103b657600080fd5b803590602001918460018302840111600160201b831117156103d757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061095c945050505050565b005b610276600480360361024081101561043157600080fd5b810190602081018135600160201b81111561044b57600080fd5b82018360208201111561045d57600080fd5b803590602001918460018302840111600160201b8311171561047e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040805160e081810190925293969594818101949350915060079083908390808284376000920191909152505060408051808201825292959493818101939250906002908390839080828437600092019190915250506040805160c08181019092529295949381810193925090600690839083908082843760009201919091525091949392602081019250359050600160201b81111561055157600080fd5b82018360208201111561056357600080fd5b803590602001918460018302840111600160201b8311171561058457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156105d657600080fd5b8201836020820111156105e857600080fd5b803590602001918460018302840111600160201b8311171561060957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a36945050505050565b604080516004808252602482019092526020810180516001600160e01b03166323b872dd60e01b17905260009160609161068391610c5e565b85519091501561069257600080fd5b61069a610e3e565b6106a2610e3e565b8980602001905160808110156106b757600080fd5b50805160408b810151929450840192506001600160a01b039182169116146107105760405162461bcd60e51b8152600401808060200182810382526037815260200180610e866037913960400191505060405180910390fd5b8751600090600181111561072057fe5b1461075c5760405162461bcd60e51b8152600401808060200182810382526022815260200180610ebd6022913960400191505060405180910390fd5b6107708361076b886004610c5e565b610c73565b61077957600080fd5b6000806000610789896004610cd7565b806020019051606081101561079d57600080fd5b508051602082015160409092015190945090925090508b600160200201516001600160a01b0316836001600160a01b0316146107d857600080fd5b60808c01516001600160a01b038381169116146107f457600080fd5b8351811461080157600080fd5b602085015160a08d01516001600160a01b039081169116146108545760405162461bcd60e51b815260040180806020018281038252603d815260200180610edf603d913960400191505060405180910390fd5b60208b0151600090600181111561086757fe5b146108a35760405162461bcd60e51b8152600401808060200182810382526029815260200180610e5d6029913960400191505060405180910390fd5b6108b28661076b8a6004610c5e565b6108bb57600080fd5b60008060006108cb8b6004610cd7565b80602001905160608110156108df57600080fd5b508051602082015160409092015190945090925090508e600460200201516001600160a01b0316836001600160a01b03161461091a57600080fd5b60208f01516001600160a01b0383811691161461093657600080fd5b6020870151811461094657600080fd5b5060019f9e505050505050505050505050505050565b60008086806020019051604081101561097457600080fd5b50805160209091015190925090506001600160a01b03821686600260200201516001600160a01b0316146109a757600080fd5b60008560018111156109b557fe5b146109bf57600080fd5b6020868101516080880151604080516001600160a01b0393841660248201529290911660448301526064808301859052815180840390910181526084909201905290810180516001600160e01b03166323b872dd60e01b179052610a24908490610c73565b610a2d57600080fd5b50505050505050565b825160009015610a4557600080fd5b610a4d610e3e565b610a55610e3e565b888060200190516080811015610a6a57600080fd5b50805160408a810151929450840192506001600160a01b03918216911614610ac35760405162461bcd60e51b8152600401808060200182810382526037815260200180610e866037913960400191505060405180910390fd5b86516000906001811115610ad357fe5b14610b0f5760405162461bcd60e51b8152600401808060200182810382526022815260200180610ebd6022913960400191505060405180910390fd5b60208801516080890151610b839187918460005b60209081029190910151604080516001600160a01b03958616602482015293909416604484015260648084019190915283518084039091018152608490920190925290810180516001600160e01b03166323b872dd60e01b179052610c73565b610b8c57600080fd5b602082015160a08901516001600160a01b03908116911614610bdf5760405162461bcd60e51b815260040180806020018281038252603d815260200180610edf603d913960400191505060405180910390fd5b60208701516000906001811115610bf257fe5b14610c2e5760405162461bcd60e51b8152600401808060200182810382526029815260200180610e5d6029913960400191505060405180910390fd5b60808801516020890151610c46918691846001610b23565b610c4f57600080fd5b50600198975050505050505050565b6060610c6c83600084610cfb565b9392505050565b815181516000916001918114808314610c8f5760009250610ccd565b600160208701838101602088015b600284838510011415610cc8578051835114610cbc5760009650600093505b60209283019201610c9d565b505050505b5090949350505050565b60606000610ce6845184610d6a565b9050610cf3848483610cfb565b949350505050565b60608082158015610d1757604051915060208201604052610d61565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610d50578051835260209283019201610d38565b5050858452601f01601f1916604052505b50949350505050565b6000610c6c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060008184841115610e365760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610dfb578181015183820152602001610de3565b50505050905090810190601f168015610e285780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6040518060400160405280600290602082028036833750919291505056fe4552433732313a20636f756e74657263616c6c206d7573742062652061206469726563742063616c6c4552433732313a2063616c6c20746172676574206d75737420657175616c2061646472657373206f6620746f6b656e20746f20676976654552433732313a2063616c6c206d7573742062652061206469726563742063616c6c4552433732313a20636f756e74657263616c6c20746172676574206d75737420657175616c2061646472657373206f6620746f6b656e20746f20676574a2646970667358221220721e60d7ccdf9c3ff17d3160920ed3f31b8e86f119d61048a9ee6ce9b426213d64736f6c63430007050033";

type StaticERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StaticERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StaticERC721__factory extends ContractFactory {
  constructor(...args: StaticERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StaticERC721> {
    return super.deploy(overrides || {}) as Promise<StaticERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StaticERC721 {
    return super.attach(address) as StaticERC721;
  }
  override connect(signer: Signer): StaticERC721__factory {
    return super.connect(signer) as StaticERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StaticERC721Interface {
    return new utils.Interface(_abi) as StaticERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StaticERC721 {
    return new Contract(address, _abi, signerOrProvider) as StaticERC721;
  }
}
