// 
var _generate = function (left, right, n, s) {
  if (left == n&& right == n) {
    console.info(s)
    return
  }

  if (left < n) {
    _generate(left + 1, right, n, s + '(')
  }
  if (left > right) {
    _generate(left, right + 1, n, s + ')')
  }
}

var gemerate = function (n) {
  _generate(0, 0, 3, '')
}

gemerate(3)
