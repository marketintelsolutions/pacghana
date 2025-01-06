import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default MainLayout