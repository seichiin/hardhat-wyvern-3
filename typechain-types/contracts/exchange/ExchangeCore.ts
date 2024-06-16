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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ExchangeCoreInterface extends utils.Interface {
  functions: {
    "approved(address,bytes32)": FunctionFragment;
    "fills(address,bytes32)": FunctionFragment;
    "registries(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "approved" | "fills" | "registries"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approved",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "fills",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "registries",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "approved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fills", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registries", data: BytesLike): Result;

  events: {
    "OrderApproved(bytes32,address,address,address,bytes4,bytes,uint256,uint256,uint256,uint256,bool)": EventFragment;
    "OrderFillChanged(bytes32,address,uint256)": EventFragment;
    "OrdersMatched(bytes32,bytes32,address,address,uint256,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderApproved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderFillChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrdersMatched"): EventFragment;
}

export interface OrderApprovedEventObject {
  hash: string;
  registry: string;
  maker: string;
  staticTarget: string;
  staticSelector: string;
  staticExtradata: string;
  maximumFill: BigNumber;
  listingTime: BigNumber;
  expirationTime: BigNumber;
  salt: BigNumber;
  orderbookInclusionDesired: boolean;
}
export type OrderApprovedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ],
  OrderApprovedEventObject
>;

export type OrderApprovedEventFilter = TypedEventFilter<OrderApprovedEvent>;

export interface OrderFillChangedEventObject {
  hash: string;
  maker: string;
  newFill: BigNumber;
}
export type OrderFillChangedEvent = TypedEvent<
  [string, string, BigNumber],
  OrderFillChangedEventObject
>;

export type OrderFillChangedEventFilter =
  TypedEventFilter<OrderFillChangedEvent>;

export interface OrdersMatchedEventObject {
  firstHash: string;
  secondHash: string;
  firstMaker: string;
  secondMaker: string;
  newFirstFill: BigNumber;
  newSecondFill: BigNumber;
  metadata: string;
}
export type OrdersMatchedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, string],
  OrdersMatchedEventObject
>;

export type OrdersMatchedEventFilter = TypedEventFilter<OrdersMatchedEvent>;

export interface ExchangeCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeCoreInterface;

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
    approved(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    fills(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    registries(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  approved(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  fills(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  registries(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    approved(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fills(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registries(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "OrderApproved(bytes32,address,address,address,bytes4,bytes,uint256,uint256,uint256,uint256,bool)"(
      hash?: PromiseOrValue<BytesLike> | null,
      registry?: null,
      maker?: PromiseOrValue<string> | null,
      staticTarget?: null,
      staticSelector?: null,
      staticExtradata?: null,
      maximumFill?: null,
      listingTime?: null,
      expirationTime?: null,
      salt?: null,
      orderbookInclusionDesired?: null
    ): OrderApprovedEventFilter;
    OrderApproved(
      hash?: PromiseOrValue<BytesLike> | null,
      registry?: null,
      maker?: PromiseOrValue<string> | null,
      staticTarget?: null,
      staticSelector?: null,
      staticExtradata?: null,
      maximumFill?: null,
      listingTime?: null,
      expirationTime?: null,
      salt?: null,
      orderbookInclusionDesired?: null
    ): OrderApprovedEventFilter;

    "OrderFillChanged(bytes32,address,uint256)"(
      hash?: PromiseOrValue<BytesLike> | null,
      maker?: PromiseOrValue<string> | null,
      newFill?: null
    ): OrderFillChangedEventFilter;
    OrderFillChanged(
      hash?: PromiseOrValue<BytesLike> | null,
      maker?: PromiseOrValue<string> | null,
      newFill?: null
    ): OrderFillChangedEventFilter;

    "OrdersMatched(bytes32,bytes32,address,address,uint256,uint256,bytes32)"(
      firstHash?: null,
      secondHash?: null,
      firstMaker?: PromiseOrValue<string> | null,
      secondMaker?: PromiseOrValue<string> | null,
      newFirstFill?: null,
      newSecondFill?: null,
      metadata?: PromiseOrValue<BytesLike> | null
    ): OrdersMatchedEventFilter;
    OrdersMatched(
      firstHash?: null,
      secondHash?: null,
      firstMaker?: PromiseOrValue<string> | null,
      secondMaker?: PromiseOrValue<string> | null,
      newFirstFill?: null,
      newSecondFill?: null,
      metadata?: PromiseOrValue<BytesLike> | null
    ): OrdersMatchedEventFilter;
  };

  estimateGas: {
    approved(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fills(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registries(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approved(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fills(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registries(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
