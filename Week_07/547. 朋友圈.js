var findCircleNum = function(M) {
    let parent = Array()
    unionFind(parent, M.length)
    for(let i = 0; i < M.length; i++){
        for(let j = i+1 ; j < M[i].length; j++){
            if( M[i][j] === 1){
                union(parent, i, j)
            }
        }
        //console.log(parent)
    }
    let exist = Array()
    let cnt = 0
    //console.log('final parent', parent)
    for(let i = 0; i < parent.length; i++){
        //console.log(exist,parent[i], exist[parent[i]])
        if(exist[parent[i]] === undefined) {
            exist[parent[i]] = 1
            cnt = cnt + 1
        } 
    }
    return cnt
};

function unionFind(p, n) {
    for(let i = 0; i < n; i++){
        p[i] = i
    }
}

function find(p, k) {
    while(p[k] != k) {
        k = p[k]
    }
    return k
}

function union(p, a, b) {
    let pa = find(p, a)
    let pb = find(p, b)
    if (pa === pb) {
        return
    } else {
        for(let i = 0; i < p.length; i++){
            if(p[i] === pa) {
                p[i] = pb
            }
        }
    }
}