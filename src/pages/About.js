import React, { useEffect } from 'react'
import PageBanner from '../components/PageBanner'
import { Link } from 'react-router'
import Counts from '../components/About/Counts'
import Team from '../components/About/Team'
import MisionVision from '../components/About/MisionVision'

const About = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <section className='pb-40'>
            <PageBanner text='About Us' image='aboutbanner' />

            <div className='w-full max-w-max mx-auto mt-20 flex gap-20 '>
                <img src="/about.jpg" className='max-w-[50%] object-cover rounded-[10px]' alt="corporate" />
                <div>
                    <h3 className='text-secondaryRed rounded-full w-fit border border-secondaryRed p-1 px-2 font-semibold'>ABOUT COMPANY</h3>

                    <h2 className='capitalize text-4xl font-semibold mt-5 tracking-[1px]'>deliver exceptional services in our chosen markets</h2>

                    <p className='text-xl mt-10 font-light tracking-[1px] text-justify'>PanAfrican Capital Ghana Limited is a
                        PanAfrican Capital Holdings Company
                        with special focus on key sectors across
                        emerging and frontier markets in Africa.

                        <br /><br />
                        PAC Ghana is an investment banking firm
                        that focuses extensively on providing
                        advisory services to its clients and
                        raising capital for both the private and
                        public sectors.
                    </p>

                </div>
            </div>

            <Counts />
            <MisionVision />
            <Team />

        </section>
    )
}

export default About