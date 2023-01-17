import React from 'react'
import style from './ReceipeTimer.module.scss'
import {Box, Button, Typography} from '@mui/material'

//material ui icons
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import AddIcon from '@mui/icons-material/Add'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'

function ReceipeTimer() {
  return (
    <div>
      <Box className={style.timeContainer}>
        <Box>
          <AccessTimeIcon sx={{fontSize: '52px',marginRight: '20px'}}/>
        </Box>
        <Box>
          <Typography style={{    marginBottom:  '0.625rem',
            fontWeight:    '400',
            fontSize:      '.75rem',
            letterSpacing: '.094rem'}}
          >PREP</Typography>
          <Typography className={style.receipeTime} sx={{fontSize: '1.25rem',fontWeight: 'bold'}}>10 mins</Typography>
        </Box>
        <Box>
          <Typography style={{    marginBottom:  '0.625rem',
            fontWeight:    '400',
            fontSize:      '.75rem',
            letterSpacing: '.094rem'}}
          >BAKE</Typography>
          <Typography className={style.receipeTime2} sx={{fontSize: '1.25rem',fontWeight: 'bold'}}>1 hr to 1 hr 15 mins</Typography>
        </Box>
        <Box >
          <Typography style={{    marginBottom:  '0.625rem',
            fontWeight:    '400',
            fontSize:      '.75rem',
            letterSpacing: '.094rem'}}
          >TOTAL</Typography>
          <Typography className={style.receipeTime} sx={{fontSize: '1.25rem',fontWeight: 'bold'}}>1 hr 25 mins</Typography>
        </Box>

        

      </Box>
      <hr style={{width: '36.5%',display: 'inline-block',opacity: '50%' }}/>
      <Box className={style.timeContainer}>
        <Box>
          <AccessTimeIcon sx={{fontSize: '52px',marginRight: '20px'}}/>
        </Box>
        <Box>
          <Typography style={{    marginBottom:  '0.625rem',
            fontWeight:    '400',
            fontSize:      '.75rem',
            letterSpacing: '.094rem'}}
          >YIELD</Typography>
          <Typography className={style.receipeTimeLower} sx={{fontSize: '1.25rem',fontWeight: 'bold'}}>1 loaf,12 generous servings</Typography>
          

        </Box>
        <Button startIcon={<AddIcon/>} variant='outlined' sx={{border: '1px solid red',height: '36px',marginRight: '10px',color: 'black',letterSpacing: '.094rem'}}>SAVE RECIPE</Button>
        <Button startIcon={<LocalPrintshopIcon/>} variant='outlined' sx={{border: '1px solid red',height: '36px',color: 'black',letterSpacing: '.094rem'}}>PRINT</Button>
       
      </Box>
    </div>
  )
}

export default ReceipeTimer