---
id: arch
title: CKB 的基本结构
permalink: book/zh/arch.html
---

要理解 CKB 上的各种操作，首先要对 CKB 的基本结构有了解。CKB 一共有四种主要的数据结构，分别是 cell, transaction, script 和 block 。

## Cell

cell 是 CKB 的基本元素，就跟它名字一致，cell 是 CKB 的细胞。cell 中可以存放数据和脚本。数据可能是某个应用的状态数据也可能是 UDT 也就是用户自定义的 Token 。脚本用来实现 CKB 的各种智能功能。

一个 cell 的数据结构如下：

```
cell {
  capacity
  data
  type
  lock
}
```

下面详细介绍一下：

- capacity 是用来限制 cell 大小的，是以 byte 为单位的整数。
- data 可以用来保存数据和脚本，没错，的确可以保存脚本，而且脚本只能保存到 data 中，不能保存到其他地方。
- type 规定了当前 cell 的类型，说白了就是给 data 中的数据一些限制规则，修改 data 的时候如果违背了这些规则，那么就会修改失败，具体 type 的作用以后咱们通过各种实际例子来看。
- lock 用来定义 cell 的所有人。

注意，type 和 lock 的数据结构都是 script ，但是有意思的是 script 数据结构中是不直接存储脚本代码的，而是存储指向脚本代码的指针，具体代码应该存到哪呢？咱们刚说过了。

## Transaction 交易

发起交易的目的是更新 cell 。

交易的作用可以从两个方面来理解。首先，把 cell 转交给另外一个人，类似于比特币区块链上，你发起一个交易把你的一个币转给我，这个作用跟“交易”这个词的字面意思比较相符。第二，发交易对 CKB 而言，更重要的作用是更新 cell 中的数据和脚本。

交易发出后，网络会执行交易。每个交易中都包含多个 input cell 和 output cell 。除此之外还包含一些依赖数据，分别保存到 `deps` 和 `witness` 两项之内。一旦一个 cell 被用作交易的输入了，这个 cell 就死了，而对应的 out 的 cell 就活了。

![](https://img.haoqicat.com/2019070203.jpg)

稍微展开说说交易验证过程。首先要求交易没有凭空生成新的 cell ，也就是要验证 input cell 和 output cell 要的数量要相等（不考虑矿工费）。其次就是交易相关的脚本会被执行到，这是咱们下一部分要讨论的核心问题。

## Script 脚本

交易被网络验证的时候，到底会有那些脚本被执行到呢？答案是 input cell 的 lock 脚本以及 output cell 的 type 脚本。

lock 脚本主要体现所有权。验证过程要保证，发起交易的人是有权力去修改 cell 所有人的，换句话说也就是 lock 脚本要能够成功执行。而要成功的执行 lock ，就要求交易发起人能够提供跟 lock 脚本中的公钥对应的签名。这个签名就存放到前面咱们刚刚提过的 witnesses 这项之内。

type 脚本的内容也会被执行。具体发挥的作用就比较多样了，这里先不展开。

这就是对脚本的简单介绍了。

## Block 区块

区块由打包到里面的一些交易以及一个包含区块相关数据的区块头文件组成。跟比特币类似，CKB 的区块也需要矿工去进行 POW 运算，去为区块找到一个合适的封条 seal ，有了封条的区块才是可以被网络接收的区块。

## 总结

以上就是 CKB 的四种核心的数据结构了。理解他们是理解 CKB 交易如何执行，如何写智能合约和如何定义 UDT 的重要基础。

参考：
- https://docs.nervos.org/basic-concepts/architecture#scripts 
- https://docs.nervos.org/dev-guide/scripts
