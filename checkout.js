function predicate(items) {
  return items.discount > 0
}

function selectSaleItems(items) {
  return items.filter(predicate)
}

module.exports = selectSaleItems
