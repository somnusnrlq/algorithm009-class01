//解法一 递归
//时间复杂度：O(N)，其中 N 指的是链表的节点数量。 空间复杂度：O(N)，递归过程使用的堆栈空间。

var swapPairs = function(head) {
   if(head==null||head.next==null){
       return head
   }
   let firstNode = head
   let nextNode = head.next
   //节点1指向后序节点
   firstNode.next = swapPairs(nextNode.next)
   //节点2指向节点1
   nextNode.next = firstNode
   //返回节点2
   return nextNode
};
//解法二 迭代
//时间复杂度：O(N)，其中 N 指的是链表的节点数量。 空间复杂度：O(1)

var swapPairs = function (head) {
    //初始前置节点
    let pre = new ListNode()
    pre.next = head
    let temp = pre

    while (temp.next && temp.next.next) {
        //1节点
        let curNode = temp.next
        //2节点
        let nextNode = cur.next

        //1节点指向3节点
        curNode.next = nextNode.next
        //2节点指向1节点
        nextNode.next = cur
        //前置节点指向2节点
        temp.next = nextNode
        //修改前置节点
        temp = curNode
    }
    //返回初始前置节点的下一个节点
    return pre.next
};