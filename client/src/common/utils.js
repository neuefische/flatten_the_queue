export function getMarketsByZipCode(zipcode, markets) {
  if (zipcode.toString().length !== 5 || !markets) {
    return -1
  }
  const filteredMarkets = markets.filter(
    market => market.zipcode === zipcode.toString()
  )
  return filteredMarkets
}
