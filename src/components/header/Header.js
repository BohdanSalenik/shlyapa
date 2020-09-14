import React from 'react';
import styles from './Header.module.scss'

const Header = ({shop}) => {
  
  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <header className={styles.header}>
      <button 
        className={styles.btn} 
        type="button" 
        onClick={handleClick}
      >
        {shop.name}
      </button>
      <nav>
        <ul className={styles.navList}>
          <li>Shop</li>
          <li>Product</li>
          <li>Cart</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
