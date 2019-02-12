import React from 'react'
import styles from './Breadcrumb.module.scss'

function Breadcrumb({sequence}) {
  return (
    <div className={styles.breadcrumb}>
      {sequence.map((category, i) => (
        <p className={styles.item} key={category}>
          {i !== 0 && '> '}
          {i === sequence.length - 1 ? <strong>{category}</strong> : category}{' '}
        </p>
      ))}
    </div>
  )
}

export default Breadcrumb
