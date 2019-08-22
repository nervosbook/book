---
id: nc-max
title: What Is NC-Max?
permalink: book/en/nc-max.html
---



CKB has a Bitcoin-like consensus model namely NC-Max. NC is short for Nakamoto Consensus, which refers to the protocol used by Bitcoin. NC-Max is a tweaked version of NC, targeting higher performance and robustness.

## NC Is Cool

There are today a large number of NC derivatives used by blockchain projects, however NC is still the best.
Nervos Team developed a quantitive method to evaluate the performance of all the NC derivatives. If you consider all aspects, including selfish mining, you will find no other NC-like protocols doing better than NC.

So Nervos decided to stick to NC, but still tries to make possible improvements.

## Fight limited Bandwidth

The biggest bottleneck for all the NC-like protocols is natural bandwidth.

Once you send a transaction to the network. And the transaction will be replicated to all the network nodes. So part of the bandwidth will be used to synchronize transactions. Once this is done, consensus is reached to decide which subset of the transactions will be included in next block. The consensus process also consume part of the bandwidth since some communications are needed. Given a transaction always take certain amount of bytes in size and the natural bandwidth is limited, the upper bound of the performance is clearly there, and there is no way to bypass that.

But we see an obvious problem here for NC, that we called double-transmit-problem. Every Bitcoin transaction needs to be broadcasted twice. The first transmit happens when a user constructs a new transaction and broadcasts it to all the nodes. The second happens when a miner creates the next block and broadcasts it to all the nodes, so the transactions in the block will be broadcasted again.

NC-Max solved the double-transmit-problem and gets a performance gain. It works through a two phrase commit, so that node only need to receive a transaction once, we won't go into the tech details here.

So fixing double transmit problem helps to have a better performance.

## Utilize Increasing Bandwidth

But there is a second way to have even better performance.
The Internet bandwidth is increasing all the time, Bitcoin take a fixed approach to have 10min block time and 1M block size, which can not take advantage of the increasing bandwidth, while NC-max tries to fix this.

NC-max makes some parameters adjustable to have an adaptive consensus. The NC-max difficulty is adjusted according to orphan rate, rather than block time as Bitcoin. Because the orphan block rate is a signal of the network condition, if the network latency is low, the orphan block rate will decrease, vice versa. So when running under a good network speed, CKB will have lower difficulty to produce more blocks in a same time gap and thus increase the throughput of the network.

So having the mining difficulty adjustable according to orphan block rate, is the second way to make good use increasing bandwidth.

## Conclusion

This is NC-max. NC-max utilizes NC's brilliance and made two improvements to fully utilize the bandwidth: NO.1 fixing the double-transmit-problem NO.2 having an  adaptive consensus. The final result is NC-max can reach 200 transactions per second, which is great to have as a global POW consensus chain.
