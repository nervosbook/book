---
id: cell
title: Cell 原理
permalink: book/zh/cell.html
---

Nervos CKB 的主要任务是存储数据，而数据是存放到一个个的 Cell 之中的。所有的 Cell 组成了 CKB 区块链的主体内容。本篇就来解刨一下 Cell ，看看里面都有什么机关。

## 一个 Cell 的基本结构

先来宏观的看看 Cell 的基本数据结构。

一个 Cell 是由下面四项数据组成的。

```
Cell {
  capacity
  data
  lockScript
  typeScript
}
```

其中： 

- capacity 是一个整数，表示这个 Cell 的最大容量。
- data 是 cell 要保存的数据。
- lockScript 和 typeScript 是进行交易的时候要执行的脚本。

上面四项的具体作用，一会儿我们还会详细聊。另外，变量名为了表示清晰都做了简化，跟代码中的实际变量名有差异。

如果你了解比特币，理解 UTXO 的基本结构，就会发现 Cell 跟 UTXO 真的是很像。可以这么说

> Cell 就是一个通用版本的 UTXO

比特币的 UTXO 的数据结构是这样的

UTXO {
  amount
  script
}


跟 UTXO 一样，Cell 也是交易输出，二者底层的数据结构也非常的类似。UTXO 中存储的是钱的数额，不能保存通用数据，对应 amount 这一项，以及对这些钱进行转账的时候需要满足的条件，也就是 script 这一项。Cell 受到了 UTXO 的启发，把 UTXO 的 amount 一项进行了一般化处理，对应出了 capacity 和 data 两项内容，这样就把原本的一个存放整数的空间变成一个可以存放任意数据的空间。

这就是 Cell 的基本结构了。

## 如何存储数据？

下面来仔细看看 capacity 和 data 这两项，聊聊 Cell 中是如何存储数据的。

capacity 是一个整数，表示 Cell 的存储空间有多大，以字节数为单位，同时这个数量也对应 CK Byte 的数量。一个 Cell 的使用率不需要是100%，只要 Cell 中的所有四项的数据总量加起来不超过 capacity 就可以，注意，是包含 capacity 和两个脚本在内的数据总量，不是单单 data 一项。

data 是保存数据的地方，可以写入任意的一段字节。这个很简单，不说了。

数据是有历史和状态两种的。跟 UTXO 一样，一旦一个 Cell 在交易中使用，那么这个 Cell 就会被标记为”已销毁“，我们知道区块链本身是一个不可删除的数据结构，销毁并不意味着从区块链上删除这些数据，只是意味着数据从状态变成了历史。历史数据多了，还可以想办法去优化，例如让专门的存储节点去存储整条区块链，而让普通节点只去存储状态数据。但是状态数据如果太多就没办法优化了，所有节点上必须承担相应的存储成本。状态数据量失控性的增长，就是所谓的状态爆炸问题。针对状态爆炸，CKB 有明显高于普通公链的细致考量和措施，体现在它的收费模型上面，这个会在专门的文章中去介绍。

总结一下，关于 Cell 存储数据的知识要点：第一，存到 data 一项下面，存储空间受 capacity 的限制。第二，一个 Cell 只能使用一次，用完就会被销毁，里面的数据也会从状态变成历史。

## 如何更新数据？

Cell 的主要任务是存储数据，这个不假，但是如果你认为它只是像数据库那样静态的存储数据，就理解错误了。Cell 数据在被更新的时候，会触发执行自身保存的那两个脚本，而 Cell 的所有的”智能“都体现在脚本之中了。下面就来看看 Cell 数据更新的过程是怎样的。

lockScript 中指定了当前 Cell 的所有者是谁。只有能提供正确的签名，使得 lockScript 脚本成功执行的人，才能发起交易，也才能”更新“这个 Cell 中的状态。注意这里更新这个词是要加引号的，因为区块链是不可改的数据结构，Cell 中的数据一旦写入，自然也就不能更新了。但是每次交易的时候，都会创建新的 Cell ，新数据是写入到新的 Cell 中的。

typeScript 中存放对状态数据的约束条件。typeScript 定义了在 data 字段中保存的数据在被修改的过程中必须要遵守的规则，是对状态的约束。具体的脚本内容会放到 CKB-VM 中去执行的。满足同一种 typeScript 约束的所有 Cell，保存的是同一种类型的数据。typeScript 跟 lockScript 一样，可以认为也是 Cell 的锁，区别体现在 lockScript 主要体现所有权，而 typeScript  里面可以自定义很多丰富的功能。

Cell 是一个存放任意数据的盒子，但是更有意思是，盒子上能加任意的用户自己制作的锁。更新 Cell 数据的过程，就是发起交易的过程，同时也是执行脚本内容的过程。

## 总结

最后来总结一下，Cell 模型延续了比特币 UTXO 的基本哲学，让 CKB 这条链很容易去继承比特币的简单和安全的特性。同时通过巧妙的修改，就让 Cell 有了支持智能合约的能力。具体 Cell 的使用方式，通过一些实际例子，例如如何发行用户自定义 token ，或者执行智能合约，可以更清楚的看到，这些就都是后续文章中的内容了。

参考：

- https://hackernoon.com/lessons-learned-from-bitcoins-and-ethereum-s-programming-models-f9fdbe1a3fdb?from=groupmessage
- https://talk.nervos.org/t/ckb-type-script/1329
- https://talk.nervos.org/t/ckb-cell/1562
