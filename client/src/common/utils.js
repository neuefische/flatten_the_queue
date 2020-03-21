export function getMarketsByZipCode(zipcode, markets) {
  if (zipcode.length !== 5) {
    return -1
  }
  const filteredMarkets = markets.filter(market => market.zipcode === zipcode)
  return filteredMarkets
}
