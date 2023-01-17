import React from 'react'
import {Box,Typography} from '@mui/material'
import style from './RecipeDescription.module.scss'
import breadImage from '../../public/bread.jpg'
import Image from 'next/image'

function RecipeDescription() {
  return (
    <Box className={style.recipeContainer}>
     
      <Box className={style.leftContainer}>
        
        <Typography className={style.receipeTitle} sx={{fontSize: '3.75rem'}}>
        Whole-Grain Banana Bread
        </Typography>

        <Typography className={style.receipeDescrip} style={{ maxWidth:      '30.625rem',
          letterSpacing: '.016rem',
          lineHeight:    '1.56',
          fontSize:      '1.125rem'}}
        >
      This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it`s that good! And not only is this bread delicious — it`s versatile.
        </Typography>
      </Box>



      <Box>
        <Image alt='' src={breadImage}/>
      </Box>
    </Box>
    
  )
}

export default RecipeDescription