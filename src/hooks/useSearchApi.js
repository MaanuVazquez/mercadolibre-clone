import {useState, useEffect} from 'react'
import {API_URL} from '../shared/constants'

function useSearchApi(searchTerm) {
  const [searchData, setSearchData] = useState(null)

  async function fetchData() {
    const response = await fetch(`${API_URL}?q=${searchTerm}`)
    setSearchData(await response.json())
  }

  useEffect(() => {
    setSearchData(null)
    fetchData()
  }, [searchTerm])

  return searchData
}

export default useSearchApi
