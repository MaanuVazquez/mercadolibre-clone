import {useState, useEffect} from 'react'
import {API_URL} from '../shared/constants'

function useItemAPI(itemId) {
  const [product, setProduct] = useState(null)

  async function fetchItem() {
    const response = await fetch(`${API_URL}/${itemId}`)
    setProduct(await response.json())
  }

  useEffect(() => {
    fetchItem()
  }, [itemId])

  return product
}

export default useItemAPI
