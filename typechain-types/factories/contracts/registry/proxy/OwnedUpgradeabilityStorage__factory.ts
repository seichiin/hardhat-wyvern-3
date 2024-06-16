/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  OwnedUpgradeabilityStorage,
  OwnedUpgradeabilityStorageInterface,
} from "../../../../contracts/registry/proxy/OwnedUpgradeabilityStorage";

const _abi = [
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
  "0x6080604052348015600f57600080fd5b5060948061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636fde820214602d575b600080fd5b6033604f565b604080516001600160a01b039092168252519081900360200190f35b6001546001600160a01b03169056fea264697066735822122076e94755b5b7e4764946507047345fc83648badf3287ac59f35db78f0440646764736f6c63430007050033";

type OwnedUpgradeabilityStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnedUpgradeabilityStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnedUpgradeabilityStorage__factory extends ContractFactory {
  constructor(...args: OwnedUpgradeabilityStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnedUpgradeabilityStorage> {
    return super.deploy(overrides || {}) as Promise<OwnedUpgradeabilityStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwnedUpgradeabilityStorage {
    return super.attach(address) as OwnedUpgradeabilityStorage;
  }
  override connect(signer: Signer): OwnedUpgradeabilityStorage__factory {
    return super.connect(signer) as OwnedUpgradeabilityStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnedUpgradeabilityStorageInterface {
    return new utils.Interface(_abi) as OwnedUpgradeabilityStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnedUpgradeabilityStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnedUpgradeabilityStorage;
  }
}
