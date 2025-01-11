import React, { useEffect } from 'react'
import PageBanner from '../components/PageBanner'

const Portfolio = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <section>
            <PageBanner text='Portfolio' image='portfoliobanner' />

        </section>
    )
}

export default Portfolio