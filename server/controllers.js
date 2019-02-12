const fetch = require('node-fetch')
const {URL} = require('url')

const author = {
  name: 'Emmanuel',
  lastname: 'Vazquez'
}

const API_URL = 'https://api.mercadolibre.com'

async function getCategoryPath(categoryId) {
  const response = await fetch(`${API_URL}/categories/${categoryId}`)
  const data = await response.json()

  return data.path_from_root.map(({name}) => name)
}

async function getCurrency(currencyId) {
  const response = await fetch(`${API_URL}/currencies/${currencyId}`)
  const {id: currency, decimal_places: decimals} = await response.json()

  return {
    currency,
    decimals
  }
}

async function mapResults({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  condition,
  shipping: {free_shipping},
  address,
  seller_address
}) {
  return {
    id,
    title,
    price: {
      amount: price,
      ...(await getCurrency(currency_id))
    },
    picture: thumbnail,
    condition,
    free_shipping,
    address: address ? address.state_name : seller_address.state.name
  }
}

async function searchAPI(searchTerm) {
  const response = await fetch(`${API_URL}/sites/MLA/search?q=${searchTerm}`)

  const data = await response.json()

  const categories = await getCategoryPath(data.results[0].category_id)

  const items = await Promise.all(data.results.slice(0, 4).map(mapResults))

  return {author, categories, items}
}

async function itemAPI(itemId) {
  const itemResponse = await fetch(`${API_URL}/items/${itemId}`)
  const itemData = await itemResponse.json()

  if (!itemData) return {}

  const descriptionResponse = await fetch(new URL(`${API_URL}/items/${itemId}/description`))
  const description = await descriptionResponse.json()

  return {
    author,
    categories: await getCategoryPath(itemData.category_id),
    item: {
      ...(await mapResults(itemData)),
      description: description.plain_text,
      sold_quantity: itemData.sold_quantity
    }
  }
}

module.exports = {
  searchAPI,
  itemAPI
}
