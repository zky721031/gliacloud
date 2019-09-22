// Find the sum of all the multiples of 3 or 5 below 1000
// Try to implement it in the most efficient way

function sumOfMultiples (n) {
  var i
  var mul3 = 0
  for (i = 1; i <= 1000; i++) {
    if (i % 3 == 0) {
      mul3 = mul3 + i
    }
  }
  var j
  var mul5 = 0
  for (j = 1; j <= 1000; j++) {
    if (j % 5 == 0) {
      mul5 = mul5 + j
    }
  }
  var k
  var mul15 = 0
  for (k = 1; k <= 1000; k++) {
    if (k % 15 == 0) {
      mul15 = mul15 + k
    }
  }
  return (mul3 + mul5) - mul15
}

export default sumOfMultiples(1000)
