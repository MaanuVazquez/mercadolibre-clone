import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import Logo from './assets/Logo.png'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to='/'>
          <img className={styles.logo} src={Logo} alt='Mercadolibre logo' />
        </Link>
        <SearchBar />
      </nav>
    </header>
  )
}

export default Header
