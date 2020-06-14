学习笔记


## 深度优先 DFS
 递归写法
``` python
function dfs(node,visted){
    if(visted.has(node)){
        // 已经存在了
        return
    }
    visted.add(node)

    for(let next_node in node.children){
        if(!visted.has(node)){
            dfs(next_node,visted)
        }
    }
}
```
 非递归写法

  递归写法
``` python
def DFS(self, tree): 
	if tree.root is None: 
		return [] 
	visited, stack = [], [tree.root]
	while stack: 
		node = stack.pop() 
		visited.add(node)
		process (node) 
		nodes = generate_related_nodes(node) 
		stack.push(nodes) 
	# other processing work 
	...

```


## BFS 广度优先搜索   ---不是用递归  栈， 而是用队列

```  python
def BFS(graph, start, end):
    visited = set()
	queue = [] 
	queue.append([start]) 
	while queue: 
		node = queue.pop() 
		visited.add(node)
		process(node) 
		nodes = generate_related_nodes(node) 
		queue.push(nodes)
	# other processing work 
	...
```


## 贪心
每一步选择中都选择当前状态下最好的，从而希望导致全局结果是最优的。

贪心法也可以用作辅助算法或者直接解决一些要求结果不特别精确的问题。

适用贪心算法的场景
简单地说，问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解称为最优子结构。

贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。

## 二分查找
```
left, right = 0, len(array) - 1 
while left <= right: 
	  mid = (left + right) / 2 
	  if array[mid] == target: 
		    # find the target!! 
		    break or return result 
	  elif array[mid] < target: 
		    left = mid + 1 
	  else: 
		    right = mid - 1
```

二分查找的前提
目标函数单调性(单调递增或者递减)
存在上下界(bounded)
能够通过索引访问(index accessible)

二分查找 + 牛顿迭代法