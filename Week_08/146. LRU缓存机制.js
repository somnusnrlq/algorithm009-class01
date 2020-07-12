type LRUCache struct {
	Exist    map[int]*node
	Count    int
	Capacity int
	Head     *node
	Tail     *node
}

type node struct {
	val  int
	key  int
	pre  *node
	next *node
}

func Constructor(capacity int) LRUCache {
	var cache = LRUCache{
		Exist:    make(map[int]*node),
		Count:    0,
		Capacity: capacity,
		Head:     nil,
		Tail:     &node{},
	}
	cache.Head = &node{}
	cache.Tail = &node{}
	cache.Head.next = cache.Tail
	cache.Tail.pre = cache.Head
	return cache
}

func (this *LRUCache) Get(key int) int {
	if _, ok := this.Exist[key]; ok && this.Exist[key] != nil {
		var temp = this.Exist[key]
		temp.pre.next = temp.next
		temp.next.pre = temp.pre
		this.Tail.pre.next = temp
		temp.pre = this.Tail.pre
		temp.next = this.Tail
		this.Tail.pre = temp
		return this.Exist[key].val
	}
	return -1
}

func (this *LRUCache) Put(key int, value int) {
	var temp *node
	if _, ok := this.Exist[key]; ok && this.Exist[key] != nil {
		temp = this.Exist[key]
		temp.pre.next = temp.next
		temp.next.pre = temp.pre
	} else {
		if this.Count >= this.Capacity {
			temp = this.Head.next
			this.Exist[temp.key] = nil
			this.Head.next = temp.next
			this.Head.next.pre = this.Head
		} else {
			this.Count = this.Count + 1
			temp = &node{}
		}

		temp.next = nil
		temp.pre = nil
	}
	this.Exist[key] = temp
	temp.val = value
	temp.key = key
	this.Tail.pre.next = temp
	temp.pre = this.Tail.pre
	temp.next = this.Tail
	this.Tail.pre = temp
}