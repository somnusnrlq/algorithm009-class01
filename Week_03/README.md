学习笔记

# 1. 递归

解决递归的模版：

1. 递归终结条件
2. 处理当前逻辑
3. 下探到下一层
4. 清理当前层

代码模板

``` js
public void recur(int level, int param) {
     // terminator递归终结条件
     if (level > MAX_LEVEL) {
         // process result
         return;
     }
     // process current logic 处理当层逻辑
     process(level, param);
     // drill down 下探到下一层
     recur( level: level + 1, newParam);
     // restore current status 清理当前层

}
```

## 分治

## 回溯 

回溯其实就是一种特殊的递归，不同的地方在于，解决一个回溯问题，实际上就是解决一个决策树的遍历过程。在这里，有三个概念需要厘清：

路径：已经走过的路，已经做过的选择；
选择列表：还可以走的路径，还可以去做的选择；
结束条件：到达了决策树的底层，无法再去做选择的条件。 回溯算法的框架模板：