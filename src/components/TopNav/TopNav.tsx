import React from 'react'
import {Box,Typography} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
function TopNav() {
  return (
    <div>
      <Box sx={{display: 'flex',gap: '10px',marginTop: '3rem'}}>
        <Typography sx={{ marginBottom:  '0.625rem',
          fontWeight:    'bold',
          fontSize:      '.75rem',
          letterSpacing: '.094rem'}}
        >RECIPES</Typography>
        <ArrowForwardIosIcon sx={{color: 'red',fontSize: '.75rem'}}/>

        <Typography sx={{ marginBottom:  '0.625rem',
          fontWeight:    'bold',
          fontSize:      '.75rem',
          letterSpacing: '.094rem'}}
        >BREAD</Typography>
        <ArrowForwardIosIcon sx={{color: 'red',fontSize: '.75rem'}}/>


        <Typography sx={{ marginBottom:  '0.625rem',
          fontWeight:    'bold',
          fontSize:      '.75rem',
          letterSpacing: '.094rem'}}
        >QUICK BREAD</Typography>
        <ArrowForwardIosIcon sx={{color: 'red',fontSize: '.75rem'}}/>


      </Box>
    </div>
  )
}

export default TopNav