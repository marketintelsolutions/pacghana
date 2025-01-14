import React, { useEffect } from 'react'
import PageBanner from '../components/PageBanner'

const MIlestones = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section className='pb-40 '>
            <PageBanner image={'milestonebanner'} text={'Milestones'} />

            <h2 className='text-4xl font-bold text-center mt-20 mb-10'>Our Major Milestones</h2>
            <div className='w-full max-w-max mt-0 mx-auto grid grid-cols-3 gap-20'>
                <img src="/milestone1.jpg" alt="milestone1" className='mx-auto' />
                <img src="/milestone2.jpg" alt="milestone2" className='mx-auto' />
                <img src="/milestone3.jpg" alt="milestone3" className='mx-auto' />
                <img src="/milestone4.jpg" alt="milestone4" className='mx-auto' />
                <img src="/milestone5.jpg" alt="milestone5" className='mx-auto' />
                <img src="/milestone6.jpg" alt="milestone6" className='mx-auto' />
            </div>
        </section>
    )
}

export default MIlestones