// Please try to add 1~3 line of code to finish the integration

function integrate (fun, start, end) {
  // you work here
  let step = 0.1
  let intercept = start
  let area = 0
  while (intercept < end) {
    intercept += step
  }
  return area
}

export default integrate(x => (x ** 2 + 1), 0, 10)
