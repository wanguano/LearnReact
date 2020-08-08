function formatPrice(price, toFixedNumber = 2) {
  if (typeof price === 'number') {
    price = Number(price) || 0
  }
  return '￥' + price.toFixed(toFixedNumber)
}