import React from 'react'
import {withRouter} from 'react-router-dom'
import useSearchApi from '../../hooks/useSearchApi'
import Breadcrumb from '../Breadcrumb'
import styles from './ItemList.module.scss'
import Item from './Item'

function ItemList({location}) {
  const searchQuery = new URLSearchParams(location.search).get('q')
  const data = useSearchApi(searchQuery)

  if (!searchQuery || !data) return null

  return (
    <div>
      <Breadcrumb sequence={data.categories} />
      <main className={styles.container}>
        {data.items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </main>
    </div>
  )
}

export default withRouter(ItemList)
