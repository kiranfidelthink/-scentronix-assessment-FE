import React from 'react'
import {Box} from '@mui/material'
import styles from './Nav.module.scss'
import monkey from '../../public/monkeyImg.png'
import Image from 'next/image'
function nav() {
  return (
    <div className={styles.navMainConatiner}>
      
      <Box  className={styles.navContainerTop} >
      
        <ul className={styles.navContainer}>
         
          
          <li>SHOP</li>
          <li>RECIPES</li>
          <li>LEARN</li>

          <li>ABOUT</li>
          <li>BLOG</li>


        </ul>
      </Box>
    </div>
  )
}

export default nav 