import numeral from 'numeral'

function full (num) {
  return numeral(num).format('0,0.00000000')
}
function pretty (num) {
  return numeral(num).format('0,0.00')
}
function short (num) {
  if (num > 1000000000) {
    return pretty(num / 1000000000) + 'B'
  }
  if (num > 1000000) {
    return pretty(num / 1000000) + 'M'
  }
  if (num > 1000) {
    return pretty(num / 1000) + 'K'
  }
  return numeral(num).format('0,0.00')
}
function integerize (num) {
  return numeral(num).format('0,0')
}
function fractionize (num) {
  return numeral(num).format('.00')
}

export default {
  full: full,
  pretty: pretty,
  int: integerize,
  frac: fractionize,
  short: short
}