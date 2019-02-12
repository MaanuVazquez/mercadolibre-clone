import React from 'react'
import Breadcrumb from '../Breadcrumb'
import useItemAPI from '../../hooks/useItemApi'
import styles from './Product.module.scss'

function Product({match}) {
  const productId = match.params.id
  const product = useItemAPI(productId)

  if (!productId || !product) return null

  const {categories, item} = product

  const decimals = (item.price.amount % 1).toString().slice(2, 2 + item.price.decimals)

  return (
    <>
      <Breadcrumb sequence={categories.concat([item.title])} />
      <div className={styles.container}>
        <div className={styles.productDetails}>
          <img src={item.picture} className={styles.picture} alt={item.title} />
          <div>
            <p className={styles.firstParagraph}>
              {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos
            </p>
            <p className={styles.secondParagraph}>{item.title}</p>
            <p className={styles.thirdParagraph}>
              $ {parseInt(item.price.amount, 0)} {item.price.decimals && <sup>{decimals}</sup>}
            </p>
            <button type='button'>Comprar</button>
          </div>
        </div>
        <div className={styles.productDescription}>
          <p className={styles.descriptionTitle}>Descripción del producto</p>
          <p className={styles.description}>{item.description}</p>
        </div>
      </div>
    </>
  )
}

export default Product
