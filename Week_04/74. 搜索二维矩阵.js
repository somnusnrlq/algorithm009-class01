var searchMatrix = function(matrix, target) {
    if(matrix.length==0)
      return false
    var i=0
    for(var i;i<matrix.length;i++)
      if(matrix[i][0]>target)
        break
    if(i==0)
      return false
    return matrix[i-1].indexOf(target)!=-1
  };