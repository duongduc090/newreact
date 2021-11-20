import { Container  } from '@mui/material'
import React, { useState } from 'react'
import HeaderClient from '../component/headerClient'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'

const Client = () => {
    return (
        <>
        <div className='card-3'>
            <HeaderClient/>
        </div>
        <Container maxWidth="xl" sx={{mt:2}}>
            <Outlet/>
        </Container>    
        <Footer/>
        </>
    )
}

export default Client
