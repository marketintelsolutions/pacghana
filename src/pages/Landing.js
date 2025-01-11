import React, { useEffect } from 'react'
import Banner from '../components/Landing.js/Banner'
import SectionTwo from '../components/Landing.js/SectionTwo'
import SectionThree from '../components/Landing.js/SectionThree'

const Landing = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <main>
            <Banner />
            <SectionTwo />
            <SectionThree />
        </main>
    )
}

export default Landing