---
id: storage
title: Designed For Data Storage
permalink: book/en/storage.html
---

To understand Nervos CKB, we need to bear in mind that Nervos is designed for data storage, in other words, CKB is a storage-focused blockchain. What does storage-foucsed really mean snd How to provide sustaninable security for the stored data? Let's figure it out.

## A Stroage-focused Blockchain

CKB is special in that it focuses on storing general data, rather than processing transactions as Bitcoin does. That's why it is named CKB, which is short for Common Knowledge Base, meaning a place to store common knowledge.

Bitcoin is a tansaction-foucsed blockchain. It is a decentralized transaction processing system, focusing on providing incentives and punishments for the consensus process — ensuring that participating nodes verify transactions and reach consensus. From another persepective, Bitcoin can also be seen as a data storage platform, but the only thing it stores is numbers, monetary value to be more specific.

But Nervos CKB is designed to support smart contracts, and will store genral data besides numbers. Nervos is a store of assets platform, which preserves not only its own native token but also user defined tokens and any type of general data as common knowledge. CKB's main job is to make all these data secure and immutable.

That's what it means to say CKB is a storage-focused blockchain.

## A Storage-based Economics Model

Nervos' goal to be storage-foucsed blockchain will be acheived by a storage-based economic model. 

What is a storage-based economics model? Even though CKB also charges on computation, but storage-based model means it charges for storage, by space and time comsumption. That's why Nervos has secondary issuance and NervosDAO to cellect storage rent, see the episode NervosDAO for more info on this. A storage-based ecomomics model means the users will pay for storage occupation.

Bitcoin charges by transactions. Bitcoin bounds block size to confine how many transactions can be processed in 10mins, which is essentially means to throttle bandwidth, and consider bandwith is a scarce resource and price on it. And there are other smart contract platforms charging by computation. But Nervos CKB chooses a unique way for herself by charging by storage. Why is it? No one can deny that public chain is really expensive, maybe 10000 more expensive then cloud storage, whether doing computaion or storage on it. But actually consumption with computation and bandwidth are both renewable, but once storage space is occupied, all the nodes will have to bear the cost of storing forever. And with time passing by too much data get storaged, it get harder to afford such amount of storage, some full nodes will quit, and decenralization is harmed. To conclude, the real scarcity and bottleneck of public blockchain resousre is actually storage, so it's make a lot of sense to charge mainly by storage as Nervos CKB is doing. On the other hand, if storage is not properly charged, it will easily result in abuse. 

That explains why Nervos choosed this storage-based economics model.

## Sustainable Security

Meanwhile, Nervos CKB has to make sure the system is sustainable, so if I store data today on CKB, I can be confident that it will be kept secure and immutable in the foreseeable future.

That's why we need incentive and tokens. Nervso CKB has its own native token named CK Byte. If you won one CK Byte, it means you can occupy at most 1 byte of the blockchain storage. To give a metaphor, owning CK Bytes is like owning a piece of land, you can build on it or rent it, with more people wanting to own CK Bytes, the price of each CK Byte will go higher. The higher the token value becomes, the securer the blockchain will be. The underlying logic is that if you want to price on sth, you need to limit its supply, CKB limits the storage supply by bounding how many CK Bytes are issued.

Not unlike Bitcoin, CKB token can be used to incentivize miners to keep protecting the security of the chain. That's how CKB get a sustainable security.

## Conculsion

Nervos CKB believes the introduction of state storage-based economics model is crucial to a sustainable preservation platform and holds the key to a sustainable token economic model. Once we understand why CKB is a storage-foucsed blockchain, and bear this mind, we are at a good position to explore other parts of the CKB idea.

ref: 

- https://medium.com/nervosnetwork/nervos-rfc-0015-crypto-economics-design-for-a-preservation-focused-layer-1-blockchain-e265da91f1f8
