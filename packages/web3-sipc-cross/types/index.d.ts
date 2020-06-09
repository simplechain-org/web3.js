/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.d.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @author Samuel Furter <samuel@ethereum.org>
 * @author Prince Sinha <sinhaprince013@gmail.com>
 * @date 2018
 */

import * as net from 'net';
import {
    BatchRequest,
    Extension,
    Log,
    PromiEvent,
    provider,
    Providers,
    RLPEncodedTransaction,
    Transaction,
    TransactionConfig,
    TransactionReceipt,
    Common,
    hardfork,
    chain,
    BlockNumber,
    LogsOptions,
    PastLogsOptions
} from 'web3-core';
import {Subscription} from 'web3-core-subscriptions';
import {AbiCoder} from 'web3-eth-abi';
import {Accounts} from 'web3-eth-accounts';
import {Contract, ContractOptions} from 'web3-eth-contract';
import {Ens} from 'web3-eth-ens';
import {Iban} from 'web3-eth-iban';
import {Personal} from 'web3-eth-personal';
import {Network} from 'web3-net';
import {AbiItem} from 'web3-utils';
import {BigNumber} from 'bignumber.js';
import BN = require('bn.js');

export {
    TransactionConfig,
    RLPEncodedTransaction,
    Transaction,
    TransactionReceipt,
    hardfork,
    Common,
    chain
} from 'web3-core';

export class Cross {
    constructor();
    constructor(provider: provider);
    constructor(provider: provider, net: net.Socket);

    Contract: new (
        jsonInterface: AbiItem[] | AbiItem,
        address?: string,
        options?: ContractOptions
    ) => Contract;
    Iban: new (iban: string) => Iban;
    personal: Personal;
    accounts: Accounts;
    ens: Ens;
    abi: AbiCoder;
    net: Network;

    readonly givenProvider: any;
    static readonly givenProvider: any;
    defaultAccount: string | null;
    defaultBlock: BlockNumber;
    defaultCommon: Common;
    defaultHardfork: hardfork;
    defaultChain: chain;
    transactionPollingTimeout: number;
    transactionConfirmationBlocks: number;
    transactionBlockTimeout: number;
    handleRevert: boolean;
    readonly currentProvider: provider;

    setProvider(provider: provider): boolean;

    BatchRequest: new () => BatchRequest;
    static readonly providers: Providers;

    extend(extension: Extension): any;

    clearSubscriptions(callback: (error: Error, result: boolean) => void): void;

    getCtxQuery(
        transactionHash: string,
        callback?: (error: Error, result: ICrossContent) => void
    ): Promise<ICrossContent>;

    getCtxOwner(
        address: string,
        callback?: (error: Error, result: ICrossCtxObject) => void
    ): Promise<ICrossCtxObject>;

    getCtxOwnerByPage(
        address: string,
        pageSize: number,
        startPage: number,
        callback?: (error: Error, result: ICrossCtxPage) => void
    ): Promise<ICrossCtxPage>;

    getCtxContent(
        callback?: (error: Error, result: ICrossCtxObject) => void
    ): Promise<ICrossCtxObject>;

    getCtxContentByPage(
        localSize: number,
        localPage: number,
        remoteSize: number,
        remotePage: number,
        callback?: (error: Error, result: ICrossCtxObject) => void
    ): Promise<ICrossCtxObject>;

    ctxGet(
        ctxId: string,
        callback?: (error: Error, result: ICrossContent) => void
    ): Promise<ICrossContent>;

    ctxGetByNumber(
        begin: string,
        eng: string,
        callback?: (error: Error, result: ICrossCtxGetStates) => void
    ): Promise<ICrossCtxGetStates>;

    ctxQueryDestValue(
        value: string,
        pageSize: string,
        startPage: string,
        callback?: (error: Error, result: ICrossCtxPage) => void
    ): Promise<ICrossCtxPage>;

    getCtxTakerByPage(
        address: string,
        pageSize: string,
        startPage: string,
        callback?: (error: Error, result: ICrossCtxPage) => void
    ): Promise<ICrossCtxPage>;

    getCtxStats(
        callback?: (error: Error, result: ICrossCtxStats) => void
    ): Promise<ICrossCtxStats>;

    getPoolStats(
        callback?: (error: Error, result: ICrossPoolStats) => void
    ): Promise<ICrossPoolStats>;
}

export interface Syncing {
    StartingBlock: number;
    CurrentBlock: number;
    HighestBlock: number;
    KnownStates: number;
    PulledStates: number;
}

export interface BlockHeader {
    number: number;
    hash: string;
    parentHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionRoot: string;
    stateRoot: string;
    receiptRoot: string;
    miner: string;
    extraData: string;
    gasLimit: number;
    gasUsed: number;
    timestamp: number | string;
}

// TODO: This interface does exist to provide backwards-compatibility and can get removed on a minor release
export interface Block extends BlockTransactionBase {
    transactions: Transaction[] | string[];
}

export interface BlockTransactionBase extends BlockHeader {
    size: number;
    difficulty: number;
    totalDifficulty: number;
    uncles: string[];
}

export interface BlockTransactionObject extends BlockTransactionBase {
    transactions: Transaction[];
}

export interface BlockTransactionString extends BlockTransactionBase {
    transactions: string[];
}

export interface GetProof {
    address: string;
    balance: string;
    codeHash: string;
    nonce: string;
    storageHash: string;
    accountProof: string[];
    storageProof: StorageProof[];
}

export interface StorageProof {
    key: string;
    value: string;
    proof: string[];
}

export interface ICrossCtxObject {
    local: {[chainId: string]: ICrossContent[]} | ICrossCtxPage;
    remote?: {[chainId: string]: ICrossContent[]} | ICrossCtxPage;
}

export interface ICrossCtxPage {
    data: {[chainId: string]: ICrossContent[]};
    total: number;
}

export interface ICrossContent {
    value: string,
    ctxId: string,
    status?: string,
    txHash: string,
    from: string,
    to: string,
    blockHash: string,
    destinationId: string,
    destinationValue: string,
    input: string,
    v: string[],
    r: string[],
    s: string[]
}

export interface ICrossCtxGetStates {
    executing?: string[] | number,
    executed?: string[] | number,
    finishing?: string[] | number,
    finished?: string[] | number,
    pending?: string[] | number,
    waiting?: string[] | number
}

export interface ICrossCtxStats {
 [chainId: string]: ICrossCtxGetStates
}

export interface ICrossPoolStats {
    pending: number,
    queue: number
}
