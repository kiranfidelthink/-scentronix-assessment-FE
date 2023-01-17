import React from 'react'
import styles from './navCatagories.module.scss'
function NavCatagories() {
  return (
    <div className={styles.navCatagoriesConatiner}>
      <ul className={styles.catagoryUllist}>
        <li>CATAGORIES</li>
        <li>COLLECTIONS</li>
        <li>RESOURCES</li>

      </ul>
    </div>
  )
}

export default NavCatagories