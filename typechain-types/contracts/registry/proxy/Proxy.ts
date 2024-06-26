/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface ProxyInterface extends utils.Interface {
  functions: {
    "implementation()": FunctionFragment;
    "proxyType()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "implementation" | "proxyType"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "proxyType", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proxyType", data: BytesLike): Result;

  events: {};
}

export interface Proxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProxyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    implementation(overrides?: CallOverrides): Promise<[string]>;

    proxyType(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { proxyTypeId: BigNumber }>;
  };

  implementation(overrides?: CallOverrides): Promise<string>;

  proxyType(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    implementation(overrides?: CallOverrides): Promise<string>;

    proxyType(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    proxyType(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
