import React from 'react'
import Nav from 'components/nav/nav'
import NavCatagories from 'components/navCatagories/NavCatagories'
import RecipeDescription from 'components/RecipeDescription/RecipeDescription'
import ReceipeTimer from 'components/ReceipeTimer/ReceipeTimer'
import {Box} from '@mui/material'
import TopNav from 'components/TopNav/TopNav'

function home() {
  return (
    <div>
      

      <Box sx={{display: 'flex',flexDirection: 'column'}} >
        <Nav/>
        <NavCatagories/>
      </Box>
      
      <Box sx={{paddingLeft: '200px'}}>     
        <TopNav/>
        <RecipeDescription/>  
        <ReceipeTimer/>
      </Box>
      
      
    </div>
  )
}

export default home