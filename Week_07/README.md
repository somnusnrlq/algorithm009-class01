学习笔记

# 第13课 字典树和并查集

## 基本结构
字典树，即 Trie 树，又称单词查找树或键树，是一种树形结构。典型应用是用于统计和排序大量的字符串(但不仅限于 字符串)，所以经常被搜索引擎系统用于文本词频统计。

它的优点是: 最大限度地减少无谓的字符串比较，查询效率比哈希表高。

## 基本性质
 1. 节点本身不存完整单词
 2. 从根结点到某一结点，路径上经过的字符连接起来，为该结点对应的字符串
 3. 每个节点是所有子节点路径代表的路径都不相同
 4. 节点存储额外都信息（如单词都频次）

## 核心思想
Trie 树的核心思想是空间换时间。

利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。

## Trie 树代码模板

``` js
/**
 * Initialize your data structure here.
 */
var TrieNode = function () {
  this.next = new Map();
  this.isEnd = false;
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (word.length === 0) {
    return;
  }
  let { root: node } = this;
  for (let char of word) {
    if (node.next.has(char) === false) {
      node.next.set(char, new TrieNode());
    }
    node = node.next.get(char);
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (word.length === 0) {
    return;
  }
  let { root: node } = this;
  for (let char of word) {
    if (node.next.has(char)) {
      node = node.next.get(char);
    } else {
      return false;
    }
  }
  return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (prefix.length === 0) {
    return;
  }
  let { root: node } = this;
  for (let char of prefix) {
    if (node.next.has(char)) {
      node = node.next.get(char);
    } else {
      return false;
    }
  }
  return true;
};
```

# 2.2.并查集

————markSet(s):建立一个新的并查集，其中包含s个单元素集合

————unionSet(x, y):把元素x和元素y所在的集合合并，要求x和y所在的集合不相交，若相交则不合并

————find(x):找到元素x所在的集合的代表，该操作也可用于判断两个元素是否位于同一个集合，只要将他们各自的代表比较一下就好