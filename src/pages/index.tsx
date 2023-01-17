
import type { NextPage } from 'next'
import React from 'react'
import Nav from 'components/nav/nav'
import NavCatagories from 'components/navCatagories/NavCatagories'
import RecipeDescription from 'components/RecipeDescription/RecipeDescription'
import ReceipeTimer from 'components/ReceipeTimer/ReceipeTimer'
import {Box, Typography} from '@mui/material'
import TopNav from 'components/TopNav/TopNav'



const styles = {
  container: {
    display:    'grid',
    height:     '100vh',
    placeItems: 'center',
    textAlign:  'center',
  },

  typography: {
    my: 4,

    // no marinBottom on last of type
    '&:last-of-type': {
      mb: 0,
    },

    // link
    '& a': {
      textDecoration: 'none',
    },

    // code
    '& code': {
      border:       '1px solid',
      borderColor:  'secondary.light',
      borderRadius: 1,
      color:        'secondary.main',
      display:      'inline-block',
      px:           1,
      py:           0.5,
    },
  },
}


const Home: NextPage = (): JSX.Element => {
  return (<>

   
    <Box sx={{display: 'flex',flexDirection: 'column'}} >
      <Nav/>
      <NavCatagories/>
    </Box>
    <Box sx={{paddingLeft: '200px'}}>
      <TopNav/>
      <RecipeDescription/>
      <ReceipeTimer/>
    </Box>
      
  </>)
}

export default Home
