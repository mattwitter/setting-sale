function predicate(singleItem) {
  return singleItem.discount > 0
}

function selectSaleItems(items) {
  return items.filter(predicate)
}

module.exports = selectSaleItems
