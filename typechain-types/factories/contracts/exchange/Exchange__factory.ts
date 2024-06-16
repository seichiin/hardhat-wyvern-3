/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Exchange,
  ExchangeInterface,
} from "../../../contracts/exchange/Exchange";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "registry",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "staticTarget",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "staticSelector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "staticExtradata",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maximumFill",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "listingTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expirationTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "orderbookInclusionDesired",
        type: "bool",
      },
    ],
    name: "OrderApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFill",
        type: "uint256",
      },
    ],
    name: "OrderFillChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "firstHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "secondHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "firstMaker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "secondMaker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFirstFill",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newSecondFill",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "metadata",
        type: "bytes32",
      },
    ],
    name: "OrdersMatched",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "approveOrderHash_",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        internalType: "address",
        name: "staticTarget",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "staticSelector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "staticExtradata",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "maximumFill",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "listingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expirationTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "orderbookInclusionDesired",
        type: "bool",
      },
    ],
    name: "approveOrder_",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "approved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[16]",
        name: "uints",
        type: "uint256[16]",
      },
      {
        internalType: "bytes4[2]",
        name: "staticSelectors",
        type: "bytes4[2]",
      },
      {
        internalType: "bytes",
        name: "firstExtradata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "firstCalldata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "secondExtradata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "secondCalldata",
        type: "bytes",
      },
      {
        internalType: "uint8[2]",
        name: "howToCalls",
        type: "uint8[2]",
      },
      {
        internalType: "bytes32",
        name: "metadata",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
    ],
    name: "atomicMatch_",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "fills",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        internalType: "address",
        name: "staticTarget",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "staticSelector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "staticExtradata",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "maximumFill",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "listingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expirationTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "hashOrder_",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "hashToSign_",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "registries",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "fill",
        type: "uint256",
      },
    ],
    name: "setOrderFill_",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateOrderAuthorization_",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        internalType: "address",
        name: "staticTarget",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "staticSelector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "staticExtradata",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "maximumFill",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "listingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expirationTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "validateOrderParameters_",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6000805460ff1916905560c0604052601a60808190527f19457468657265756d205369676e6564204d6573736167653a0a00000000000060a09081526200004a91600291906200005f565b503480156200005857600080fd5b506200010b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000975760008555620000e2565b82601f10620000b257805160ff1916838001178555620000e2565b82800160010185558215620000e2579182015b82811115620000e2578251825591602001919060010190620000c5565b50620000f0929150620000f4565b5090565b5b80821115620000f05760008155600101620000f5565b612554806200011b6000396000f3fe60806040526004361061009c5760003560e01c8063caed80df11610064578063caed80df146105af578063d57ad588146105e2578063f861975b1461061e578063f9b0bc20146106de578063fac7fc381461079e578063ffc2ab14146107d75761009c565b80630812226e146100a157806313b219e2146100cd57806314127f1314610171578063995e8195146101a15780639a5168db14610269575b600080fd5b3480156100ad57600080fd5b506100cb600480360360208110156100c457600080fd5b5035610810565b005b3480156100d957600080fd5b5061015d600480360360608110156100f057600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b81111561011f57600080fd5b82018360208201111561013157600080fd5b803590602001918460018302840111600160201b8311171561015257600080fd5b50909250905061081c565b604080519115158252519081900360200190f35b34801561017d57600080fd5b506100cb6004803603604081101561019457600080fd5b5080359060200135610868565b3480156101ad57600080fd5b506100cb60048036036101408110156101c557600080fd5b6001600160a01b03823581169260208101358216926040820135909216916001600160e01b0319606083013516919081019060a081016080820135600160201b81111561021157600080fd5b82018360208201111561022357600080fd5b803590602001918460018302840111600160201b8311171561024457600080fd5b9193509150803590602081013590604081013590606081013590608001351515610876565b6100cb600480360361034081101561028057600080fd5b810190808061020001906010806020026040519081016040528092919082601060200280828437600092019190915250506040805180820182529295949381810193925090600290839083908082843760009201919091525091949392602081019250359050600160201b8111156102f757600080fd5b82018360208201111561030957600080fd5b803590602001918460018302840111600160201b8311171561032a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561037c57600080fd5b82018360208201111561038e57600080fd5b803590602001918460018302840111600160201b831117156103af57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561040157600080fd5b82018360208201111561041357600080fd5b803590602001918460018302840111600160201b8311171561043457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561048657600080fd5b82018360208201111561049857600080fd5b803590602001918460018302840111600160201b831117156104b957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505060408051808201825293969594818101949350915060029083908390808284376000920191909152509194833594909390925060408101915060200135600160201b81111561053b57600080fd5b82018360208201111561054d57600080fd5b803590602001918460018302840111600160201b8311171561056e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610929945050505050565b3480156105bb57600080fd5b5061015d600480360360208110156105d257600080fd5b50356001600160a01b0316610bac565b3480156105ee57600080fd5b5061060c6004803603602081101561060557600080fd5b5035610bc1565b60408051918252519081900360200190f35b34801561062a57600080fd5b5061060c600480360361012081101561064257600080fd5b6001600160a01b03823581169260208101358216926040820135909216916001600160e01b0319606083013516919081019060a081016080820135600160201b81111561068e57600080fd5b8201836020820111156106a057600080fd5b803590602001918460018302840111600160201b831117156106c157600080fd5b919350915080359060208101359060408101359060600135610bd2565b3480156106ea57600080fd5b5061015d600480360361012081101561070257600080fd5b6001600160a01b03823581169260208101358216926040820135909216916001600160e01b0319606083013516919081019060a081016080820135600160201b81111561074e57600080fd5b82018360208201111561076057600080fd5b803590602001918460018302840111600160201b8311171561078157600080fd5b919350915080359060208101359060408101359060600135610c88565b3480156107aa57600080fd5b5061015d600480360360408110156107c157600080fd5b506001600160a01b038135169060200135610d53565b3480156107e357600080fd5b5061060c600480360360408110156107fa57600080fd5b506001600160a01b038135169060200135610d73565b61081981610d90565b50565b600061085f858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e2692505050565b95945050505050565b61087282826111e6565b5050565b61091c6040518061012001604052808d6001600160a01b031681526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a6001600160e01b031916815260200189898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060208101889052604081018790526060810186905260800184905282611293565b5050505050505050505050565b610ba16040518061012001604052808b60006010811061094557fe5b60200201516001600160a01b031681526020018b60016010811061096557fe5b60200201516001600160a01b031681526020018b60026010811061098557fe5b60200201516001600160a01b031681526020018a6000600281106109a557fe5b60200201516001600160e01b03191681526020018981526020018b6003601081106109cc57fe5b602002015181526020018b6004601081106109e357fe5b602002015181526020018b6005601081106109fa57fe5b602002015181526020018b600660108110610a1157fe5b602002015190526040805160608101909152808c600760200201516001600160a01b0316815260200186600060028110610a4757fe5b602002015160ff166001811115610a5a57fe5b6001811115610a6557fe5b815260209081018a90526040805161012081019091526101008e01516001600160a01b031681529081018d600960200201516001600160a01b031681526020018d600a60108110610ab257fe5b60200201516001600160a01b031681526020018c600160028110610ad257fe5b60200201516001600160e01b03191681526020018981526020018d600b60108110610af957fe5b602002015181526020018d600c60108110610b1057fe5b602002015181526020018d600d60108110610b2757fe5b602002015181526020018d600e60108110610b3e57fe5b602002015190526040805160608101909152808e600f60200201516001600160a01b0316815260200188600160028110610b7457fe5b602002015160ff166001811115610b8757fe5b6001811115610b9257fe5b81526020018990528587611420565b505050505050505050565b60036020526000908152604090205460ff1681565b6000610bcc82611a53565b92915050565b6000610c796040518061012001604052808d6001600160a01b031681526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a6001600160e01b031916815260200189898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250602081018890526040810187905260608101869052608001849052611a91565b9b9a5050505050505050505050565b6000610c92612327565b6040518061012001604052808d6001600160a01b031681526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a6001600160e01b031916815260200189898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020810188905260408101879052606081018690526080018490529050610d4381610d3e81611a91565b611b7a565b9c9b505050505050505050505050565b600560209081526000928352604080842090915290825290205460ff1681565b600460209081526000928352604080842090915290825290205481565b33600090815260056020908152604080832084845290915290205460ff1615610e00576040805162461bcd60e51b815260206004820152601f60248201527f4f726465722068617320616c7265616479206265656e20617070726f76656400604482015290519081900360640190fd5b33600090815260056020908152604080832093835292905220805460ff19166001179055565b6001600160a01b038216600090815260046020908152604080832086845290915281205415610e57575060016111df565b6001600160a01b038316331415610e70575060016111df565b6001600160a01b038316600090815260056020908152604080832087845290915290205460ff1615610ea4575060016111df565b6000610eaf85611a53565b90506000610ebc85611c06565b90508015610fcb5760408051630b135d3f60e11b808252600482018581526024830193845287516044840152875191936001600160a01b038a1693631626ba7e9388938b9390929091606490910190602085019080838360005b83811015610f2e578181015183820152602001610f16565b50505050905090810190601f168015610f5b5780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b158015610f7957600080fd5b505afa158015610f8d573d6000803e3d6000fd5b505050506040513d6020811015610fa357600080fd5b50516001600160e01b0319161415610fc0576001925050506111df565b6000925050506111df565b6000806000868060200190516060811015610fe557600080fd5b50805160208201516040909201518951919550919350909150604110801561102f57508660018851038151811061101857fe5b6020910101516001600160f81b031916600360f81b145b1561114a57876001600160a01b0316600160028760405160200180838054600181600116156101000203166002900480156110a15780601f1061107f5761010080835404028352918201916110a1565b820191906000526020600020905b81548152906001019060200180831161108d575b505061199960f11b81526002808201939093526040805180830390940184526022820180825284516020958601206000909152604283018083525260ff8a1660628301526082820189905260a282018890525160c28083019550601f19820193509181900390910190855afa15801561111e573d6000803e3d6000fd5b505050602060405103516001600160a01b03161415611145576001955050505050506111df565b6111d5565b876001600160a01b031660018685858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156111ae573d6000803e3d6000fd5b505050602060405103516001600160a01b031614156111d5576001955050505050506111df565b6000955050505050505b9392505050565b33600090815260046020908152604080832085845290915290205481141561123f5760405162461bcd60e51b81526004018080602001828103825260288152602001806124486028913960400191505060405180910390fd5b3360008181526004602090815260408083208684528252918290208490558151848152915185927f826cd05b52546b47590739469989cacd5336e0a9e6f9392de2dee5cfb19c8aab92908290030190a35050565b60208201516001600160a01b031633146112de5760405162461bcd60e51b815260040180806020018281038252604a8152602001806123cd604a913960600191505060405180910390fd5b60006112e983611a91565b90506112f481610d90565b82602001516001600160a01b0316817fbace5d282ba59cba3de1ac539b0ed46ae5a3d8ad434a3ac9f07ce45d1661481885600001518660400151876060015188608001518960a001518a60c001518b60e001518c61010001518c604051808a6001600160a01b03168152602001896001600160a01b03168152602001886001600160e01b0319168152602001806020018781526020018681526020018581526020018481526020018315158152602001828103825288818151815260200191508051906020019080838360005b838110156113d95781810151838201526020016113c1565b50505050905090810190601f1680156114065780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390a3505050565b60005460ff161561146e576040805162461bcd60e51b81526020600482015260136024820152721499595b9d1c985b98de4819195d1958dd1959606a1b604482015290519081900360640190fd5b6000805460ff1916600117815561148487611a91565b90506114908782611b7a565b6114cb5760405162461bcd60e51b81526004018080602001828103825260228152602001806124b96022913960400191505060405180910390fd5b60006114d686611a91565b90506114e28682611b7a565b61151d5760405162461bcd60e51b81526004018080602001828103825260238152602001806124fc6023913960400191505060405180910390fd5b8082141561155c5760405162461bcd60e51b81526004018080602001828103825260228152602001806124706022913960400191505060405180910390fd5b60608085806020019051604081101561157457600080fd5b8101908080516040519392919084600160201b82111561159357600080fd5b9083019060208201858111156115a857600080fd5b8251600160201b8111828201881017156115c157600080fd5b82525081516020918201929091019080838360005b838110156115ee5781810151838201526020016115d6565b50505050905090810190601f16801561161b5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b82111561163d57600080fd5b90830190602082018581111561165257600080fd5b8251600160201b81118282018810171561166b57600080fd5b82525081516020918201929091019080838360005b83811015611698578181015183820152602001611680565b50505050905090810190601f1680156116c55780820380516001836020036101000a031916815260200191505b50604052505050915091506116df848b6020015184610e26565b611730576040805162461bcd60e51b815260206004820181905260248201527f4669727374206f72646572206661696c656420617574686f72697a6174696f6e604482015290519081900360640190fd5b61173f83896020015183610e26565b61177a5760405162461bcd60e51b81526004018080602001828103825260218152602001806124db6021913960400191505060405180910390fd5b5050341561182e5760208801516040516000916001600160a01b03169034908381818185875af1925050503d80600081146117d1576040519150601f19603f3d011682016040523d82523d6000602084013e6117d6565b606091505b505090508061182c576040805162461bcd60e51b815260206004820152601d60248201527f6e617469766520746f6b656e207472616e73666572206661696c65642e000000604482015290519081900360640190fd5b505b6118418860000151896020015189611c0c565b611886576040805162461bcd60e51b8152602060048201526011602482015270119a5c9cdd0818d85b1b0819985a5b1959607a1b604482015290519081900360640190fd5b6118998660000151876020015187611c0c565b6118df576040805162461bcd60e51b815260206004820152601260248201527114d958dbdb990818d85b1b0819985a5b195960721b604482015290519081900360640190fd5b6020808901516001600160a01b039081166000908152600480845260408083208784528552808320548b86015190941683529084528082208583529093529182205490916119328b8b8b8b333489611f80565b905060006119468a8a8e8e33600089611f80565b60208d01519091506001600160a01b0316331461198c5783821461198c576020808d01516001600160a01b03166000908152600482526040808220898352909252208290555b60208a01516001600160a01b031633146119cf578281146119cf576020808b01516001600160a01b03166000908152600482526040808220888352909252208190555b868a602001516001600160a01b03168d602001516001600160a01b03167fe8447df45ce371d4c2f6cfcb9342b06165f71b244e809b909977f0dab191a009898987876040518085815260200184815260200183815260200182815260200194505050505060405180910390a450506000805460ff1916905550505050505050505050565b6001546040805161190160f01b6020808301919091526022820193909352604280820194909452815180820390940184526062019052815191012090565b60007feb61b8100bcd004cad335a779aa74e9b176b520f4b98e7b487c133a82e9853dd82600001518360200151846040015185606001518660800151805190602001208760a001518860c001518960e001518a6101000151604051602001808b81526020018a6001600160a01b03168152602001896001600160a01b03168152602001886001600160a01b03168152602001876001600160e01b03191681526020018681526020018581526020018481526020018381526020018281526020019a5050505050505050505050604051602081830303815290604052805190602001209050919050565b6000428360c001511180611ba0575060e083015115801590611ba05750428360e0015111155b15611bad57506000610bcc565b60a08301516020808501516001600160a01b03166000908152600482526040808220868352909252205410611be457506000610bcc565b611bf18360400151611c06565b611bfd57506000610bcc565b50600192915050565b3b151590565b6001600160a01b03831660009081526003602052604081205460ff16611c3157600080fd5b8151611c3c90611c06565b611c8d576040805162461bcd60e51b815260206004820152601a60248201527f43616c6c2074617267657420646f6573206e6f74206578697374000000000000604482015290519081900360640190fd5b6000846001600160a01b031663c4552791856040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050602060405180830381600087803b158015611cde57600080fd5b505af1158015611cf2573d6000803e3d6000fd5b505050506040513d6020811015611d0857600080fd5b505190506001600160a01b038116611d515760405162461bcd60e51b81526004018080602001828103825260278152602001806124926027913960400191505060405180910390fd5b846001600160a01b03166397204d8e6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015611d8c57600080fd5b505af1158015611da0573d6000803e3d6000fd5b505050506040513d6020811015611db657600080fd5b505160408051635c60da1b60e01b815290516001600160a01b0392831692841691635c60da1b916004808301926020929190829003018186803b158015611dfc57600080fd5b505afa158015611e10573d6000803e3d6000fd5b505050506040513d6020811015611e2657600080fd5b50516001600160a01b031614611e6d5760405162461bcd60e51b81526004018080602001828103825260318152602001806124176031913960400191505060405180910390fd5b6000819050806001600160a01b0316631b0f7ba98560000151866020015187604001516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001811115611ebe57fe5b815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611efc578181015183820152602001611ee4565b50505050905090810190601f168015611f295780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015611f4a57600080fd5b505af1158015611f5e573d6000803e3d6000fd5b505050506040513d6020811015611f7457600080fd5b50519695505050505050565b6000611f9e8860400151611f998a8a8a8a8a8a8a611faa565b6122be565b98975050505050505050565b6060611fb4612372565b506040805160e08101825289516001600160a01b0390811682526020808c01518216818401528a5182169383019390935288518116606083015291880151821660808201528651821660a082015290851660c0820152612012612390565b60405180604001604052808a60200151600181111561202d57fe5b600181111561203857fe5b81526020018860200151600181111561204d57fe5b600181111561205857fe5b905290506120646123ae565b6040518060c001604052808781526020018c60a0015181526020018c60c0015181526020018c60e0015181526020018a60c0015181526020018681525090508a606001518b608001518484848e604001518d60400151604051602401808060200187600760200280838360005b838110156120e95781810151838201526020016120d1565b5050505090500186600260200280838360005b838110156121145781810151838201526020016120fc565b5050505090500185600660200280838360005b8381101561213f578181015183820152602001612127565b50505050905001806020018060200184810384528a818151815260200191508051906020019080838360005b8381101561218357818101518382015260200161216b565b50505050905090810190601f1680156121b05780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b838110156121e35781810151838201526020016121cb565b50505050905090810190601f1680156122105780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b8381101561224357818101518382015260200161222b565b50505050905090810190601f1680156122705780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909d169c909c17909b5250989c50505050505050505050505050979650505050505050565b60008060206040518181865160208801895afa925080519350505080612320576040805162461bcd60e51b815260206004820152601260248201527114dd185d1a58c818d85b1b0819985a5b195960721b604482015290519081900360640190fd5b5092915050565b60408051610120810182526000808252602082018190529181018290526060808201839052608082015260a0810182905260c0810182905260e0810182905261010081019190915290565b6040518060e001604052806007906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b6040518060c00160405280600690602082028036833750919291505056fe53656e646572206973206e6f7420746865206d616b6572206f6620746865206f7264657220616e642074687573206e6f7420617574686f72697a656420746f20617070726f7665206974496e636f72726563742064656c65676174652070726f787920696d706c656d656e746174696f6e20666f72206d616b657246696c6c20697320616c72656164792073657420746f2074686520646573697265642076616c756553656c662d6d61746368696e67206f72646572732069732070726f6869626974656444656c65676174652070726f787920646f6573206e6f7420657869737420666f72206d616b65724669727374206f726465722068617320696e76616c696420706172616d65746572735365636f6e64206f72646572206661696c656420617574686f72697a6174696f6e5365636f6e64206f726465722068617320696e76616c696420706172616d6574657273a2646970667358221220f2833b09d2f8f5fc829c9679ddb7596a360c8feda206ed4156e486f4634feb6064736f6c63430007050033";

type ExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Exchange__factory extends ContractFactory {
  constructor(...args: ExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Exchange> {
    return super.deploy(overrides || {}) as Promise<Exchange>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Exchange {
    return super.attach(address) as Exchange;
  }
  override connect(signer: Signer): Exchange__factory {
    return super.connect(signer) as Exchange__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExchangeInterface {
    return new utils.Interface(_abi) as ExchangeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Exchange {
    return new Contract(address, _abi, signerOrProvider) as Exchange;
  }
}