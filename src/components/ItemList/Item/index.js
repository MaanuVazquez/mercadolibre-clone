import React from 'react'
import {Link} from 'react-router-dom'
import FreeShipping from './assets/FreeShipping.png'
import styles from './Item.module.scss'

function Item({item}) {
  const itemPath = `/items/${item.id}`
  return (
    <div className={styles.item}>
      <Link to={itemPath}>
        <img height='180px' width='180px' src={item.picture} alt={item.title} />
      </Link>

      <div className={styles.priceAndTitle}>
        <p className={styles.price}>
          $ {item.price.amount} <img src={FreeShipping} alt='Free shipping' />
        </p>
        <Link className={styles.title} to={itemPath}>
          {item.title}
        </Link>
      </div>
      <p className={styles.address}>{item.address}</p>
    </div>
  )
}

export default Item
