---
id: concerns
title: Nervos Design Concerns
permalink: book/en/concerns.html
---

As a layered blockchain network, Nervos is the result of several design concerns.

## Safe As Bitcoin

People with enough Bitcoin background knowledge shall find it easy to understand Nervos' design.

Bitcoin has its own layered architecture. The bottom layer is Bitcoin itself, as a secure store of value, the 2nd layer is lightning network, which serves as a fast transaction network.
What Nervos is trying to achieve is to inherit the basic philosophy of Bitcoin, and has its own very secure bottom layer protocol called CKB,  A POW chain with consensus model quite similar to Bitcoin.

## Store Of Assets

But instead of just expressing payments, CKB is a smart contract platform just like Ethereum. CKB does this securely by being a Store Of Assets platform.

So like Bitcoin, CKB serves store of value platform, and more specifically it's a store of assets platform. The reason Nervos does this is because when you have multiple layers, then the bottom layer should not be designed for transactions. Since when all the transactions are pushed to layer2, you want your protocol still be able to provide enough security. So if there is no transactions on CKB, then the chain will still be secure. But if a smart contract blockchain is designed for transactions, when there is no transactions, the blockchain token will have no intrinsic value, and therefore the security is lost. So that's one reason we design CKB like this.

NO2 reason is that the native token is designed to capture the value of assets, that is the only way you can have a secure store of assets platform. Take Ethereum as an example, if all the assets prices go up 100 times, there is no intrinsic reason that Ether price will go up that much. So Ethereum does not provide a good value capture mechanism for the assets. But once you are a store of assets platform, you have to do that, otherwise you will be increasingly attacked.

## Conculsion

So these are some of the concerns leading the design of Nervos Network. Again, it's a very secure store of assets platform in the center, and a lot of transactional systems around. Many other projects have very similar structure.

ref:

- https://www.youtube.com/watch?v=rOQc_jZ_LbI
