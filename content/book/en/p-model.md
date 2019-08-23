---
id: p-model
title: Abstract Programming Model
permalink: book/en/p-model.html
---


CKB has a very different programming model, an abstract programming model. Why do we need an abstract programming model?

## Why abstract programming model?

There is a problem that blockchains are often lack of cryptography primitives. An abstract programming model fix this.
Why is the lack of cryptography primitives a problem? As a layer1, you need to communicate with all kinds of layer2 protocols, and many of these layer2 protocols use novel cryptography technologies as components of their protocols.

For example, different layer2 protocols may use different signature algorithms, layer1 is expected to be able to handle them all well. This is just one example, people always want to use all kinds of cryptography primitives on layer2, and expecting layer1 can handle it anyway. But on Bitcoin or Ethereum, the only way to add a new primitive is to do a hard fork, adding a new OP_CODE to the chains.

But if we have an abstract programming model, this is easy to do. Being abstract means trying the best to push things to upper layers, so that the layer1 VM itself can be as simple and abstract as possible. 

Being simple means a lot to a layer1 blockchain. We can have a much simpler cost model. It's easy to determine how many gas you should charge for a certain OP_CODE. CKB VM uses RISC-V instruction set. Nervos believes blockchain instructions should be low-level. High-level is a synonym to complexity. So it's very easy to get how many CPU cycles one OP_CODE cost, as we calculating the gas fee for it.

## Adding Primitives At Will

A Blockchain is a hardware-like software. It is a software, but it's like hardware in that it is hard to upgrade.

By pushing the complexity to an upper layer, we can do a lot things in user space. And blockchain and evolve faster because its always easy to do things in user space.

There is NO hard coded crypto-primitives in CKB-VM. There is no special OP_CODE in CKB-VM. The problem with this design is that if you run all the primitives in VM layer, it ought to be slow. That's why no other chain is doing it this way. But CKB VM uses a hardware instruction set, which makes it easy to optimize the compiled code, to make the primitive code run faster. For example, secp256k1 is the default primitive CKB default transaction signature. It works as a smart contract deployed on CKB.

How to do it? We get the source code for secp256k1, compile it to RISC-V supported binary format, deploy the binary to CKB-VM. And whenever a transaction needs to be signed, the VM refers to the binary running. As tests shows, a verification takes 9ms, while it's 1ms if the primitive is built in the chain. So it's not as fast but acceptable, since the bottleneck is somewhere else. That is way CKB-VM is very flexible, because whenever a layer2 user wants her own primitive, she can just deploy it on CKB-VM, as we do for secp256k1. Moreover, since it's just gcc compatible hardware-like instruction set, and all other primitives are mostly written in C, so it's easy to deploy them on CKB-VM. 

## Abstract State Model

VM is only the computation part of the abstract programming model, the other part is an abstract state model.

CKB is a generalization of Bitcoin. CKB state object is a generalization of UTXO, which we call cell. You can store not just numbers but all sorts of data in a cell. The transaction structure is similar to Bitcoin. And the whole system is very much like Bitcoin, so we won't go details here.

## Conclusion

CKB has an abstract programming model. The VM is made very simple and low level, so that most things is don't in user space. Layer2 users can deploy there own crypto-primitives at will, and CKB also offers a abstract state model to support the programming model.

ref:

- https://www.youtube.com/watch?v=F1nfrTsGJqk
