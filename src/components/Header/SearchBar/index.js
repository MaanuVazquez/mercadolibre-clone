import React, {useCallback} from 'react'
import {withRouter} from 'react-router-dom'
import useInput from '../../../hooks/useInput'
import styles from './SearchBar.module.scss'
import Search from './assets/Search.png'

function SearchBar({history}) {
  const [value, handleOnChange] = useInput('')

  const handleOnSubmit = useCallback(
    evt => {
      evt.preventDefault()
      if (!value.trim()) return
      history.push(`/items?q=${value}`)
    },
    [history, value]
  )

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleOnSubmit}>
        <button type='submit'>
          <img src={Search} alt='Search' />
        </button>
        <input type='text' placeholder='Nunca dejes de buscar' value={value} onChange={handleOnChange} />
      </form>
    </div>
  )
}

export default withRouter(SearchBar)
