---
id: storage
title: 面向数据存储的设计
permalink: book/zh/storage.html
---

如果想要更好的理解 Nervos CKB ，那么需要首先记住的是 CKB 是为存储数据而生的，换句话说，CKB 是一个面向数据存储的设计。那么面向存储的设计究竟意味着什么呢？如何持续的保证存储数据的安全呢？一起来看看。

## 一个面向存储的区块链

CKB 的独特之处在于它是关注存储通用数据的，而不是像比特币那样专门用来处理交易。这也能解释为何 CKB 的全名叫做共同知识库，因为它可以用来存储各种各样的共同知识。

比特币可以说是一个面向交易而设计的区块链。它是一个去中心化的交易处理系统，关注对共识过程提供激励或者惩罚，保证各个节点能够顺利达成共识和验证交易。从另外一种角度来说，比特币也可以认为是一个数据存储平台，但是它存储的主要是数字，具体说就是钱的数额。

但是 CKB 是要支持智能合约的，所以会保存通用数据。CKB 会保存自己的原生 token 以及用户自定义的 token 以及其他的任意的通用数据，也就是所谓的共同知识。并且它的最最主要工作就是要保证这些数据的安全和不可存在，注意，这里我说主要，真的就是主要，因为区块链的革命性就在于此，而各种上层的机制也正是基于不可篡改的数据的。

这样，我们就理解了面向存储而设计的基本含义了。

## 一个基于存储的经济模型

Nervos CKB 的目标是实现一条面向存储的区块链，而达成这个目标的方式是通过一套基于存储的经济模型。有点绕，下面仔细解释一下。

那什么是一个基于存储的经济模型呢。尽管 CKB 也会针对计算量去收费，但是基于存储的模型主要就是意味着 CKB 是要对存储去单独收费的。收费会同时从时间和空间两个维度来收，说白了就是占用的存储空间越大，时间越久那么收的钱就越多，跟收房租是一个道理。收房租听起来简单，但是要对区块链的用户收租真的不是那么简单，这个咱们这里就不展开了，感兴趣的同学去看看另外一节，标题叫 NervosDAO ，主要是通过次级增发和 NervosDAO 配合来完成收租任务。好，再重复一遍，基于存储的经济模型就是要基于用户占用的存储资源进行收费。

对比比特币和其他区块链来聊一下。比特币是基于交易来收费的。比特币通过限制了区块的大小限制了十分钟之内能够处理的交易的数量，本质上是给带宽设定瓶颈，然后把带宽作为一种稀缺资源，并且基于这种稀缺性假设来定价的。类似的，其他一些支持智能合约的区块链项目是基于计算量来定价的。

但是 CKB 是另外一条思路，那就是基于存储来定价。那么这么做的理由是什么呢？一个明显的事实是公链是非常贵的，不管是用来做存储还是做计算都可能比普通的云服务贵一万倍。不过带宽和计算资源其实都算是可再生的，而存储资源一旦被占用，就会永久性的存储到所有的节点上，让节点去永久承担存储所需要的费用。另外更重要的一点，随着存储的总数据量的增加，普通的节点将会很难有经济能力去继续运转，这样全节点的数量就会减少，整个区块链的去中心化程度就大大降低了。所以总结到一点，区块链上真正形成瓶颈的稀缺资源其实是存储，所以 CKB 这种基于存储去收费的模型就非常合理了。如果对存储资源没有合理的标价，那么滥用就不可避免了。

这也就解释了为何 Nervos 采用了这么一套基于存储的经济模型。

## 可持续的安全

同时，Nervos CKB 必须要能保证系统持久的运行。如果我把数据存到 CKB 上，那么在可预见的未来，我的数据依然是要能够保证安全的。

这就是需要 token 激励的原因了。CKB 自己的原生 token 叫做 CK Byte 。如果你有一个 CK Byte ，那就意味着你可以有权占用不超过1字节的数据。打个比方，持有 CK Byte 就好像持有一片地皮，可以在上面建设也可以出租给别人，如果很多人都需要 CKB 上的这种数字空间的地皮，那么 CK Byte 的价格就自然会上升。Token 价格越高，链也就会越安全，这是包括比特币和 CKB 在内的很多区块链的特点了，不用多说。底层的逻辑是，如果你想要让一个东西升值，那么就必须要让它的供给是有限的，CKB 通过限制 CK Byte 的发行量，从而限制了 CKB 上的存储空间总量。

跟比特币类似，CK Byte 会用来奖励给矿工，这样矿工就有动机去持续的保护整个系统的安全了。这就是如何保证 CKB 的持久性安全的基本方式。

## 结论

基于存储的经济模型对维护一个面向存储的区块链平台是非常关键的，这是 CKB 设计的一个基础理念。当我们理解了 CKB 为何以及如何实现一个面向存储的区块链之后，再去理解 CKB 的其他的功能，就相对比较容易了。

参考：

- https://medium.com/nervosnetwork/nervos-rfc-0015-crypto-economics-design-for-a-preservation-focused-layer-1-blockchain-e265da91f1f8