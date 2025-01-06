import React from 'react'
import { Link } from 'react-router'

const SectionThree = () => {
    return (
        <section className='flex flex-col items-center pb-40'>
            <h3 className='text-secondaryRed rounded-full w-fit border border-secondaryRed p-1 px-2 font-semibold'>OUR PORTFOLIO</h3>
            <h2 className='text-4xl mt-4'>Industries that we serve</h2>
            <p className='max-w-[50%] mt-6 text-center text-xl font-light'>We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>

            <div className='grid grid-cols-3 w-full max-w-max mx-auto bg-primaryBlue p-[1px] gap-[1px] mt-20'>
                <div className='flex flex-col gap-5 w-fit bg-white px-10 py-5'>
                    <img src="/financial.png" alt="financial" className='max-w-[90px]' />
                    <h3 className='text-secondaryRed font-semibold text-2xl'>Financial Services</h3>
                    <p className='font-light'>Our brands are synonymous with exquisite accommodations, exquisite dining experiences, and an array of captivating entertainment options</p>
                </div>
                <div className='flex flex-col gap-5 w-fit bg-white px-10 py-5'>
                    <img src="/hospitality.png" alt="hospitality" className='max-w-[90px]' />
                    <h3 className='text-secondaryRed font-semibold text-2xl'>Hospitality & Entertainment</h3>
                    <p className='font-light'>Our brands are synonymous with exquisite accommodations, exquisite dining experiences, and an array of captivating entertainment options</p>
                </div>
                <div className='flex flex-col gap-5 w-fit bg-white px-10 py-5'>
                    <img src="/estate.png" alt="estate" className='max-w-[90px]' />
                    <h3 className='text-secondaryRed font-semibold text-2xl'>Real Estate & Infrastructure</h3>
                    <p className='font-light'>Our brands are synonymous with exquisite accommodations, exquisite dining experiences, and an array of captivating entertainment options</p>
                </div>
                <div className='flex flex-col gap-5 w-fit bg-white px-10 py-5'>
                    <img src="/agro.png" alt="agro" className='max-w-[90px]' />
                    <h3 className='text-secondaryRed font-semibold text-2xl'>Agro-allied & FMCG</h3>
                    <p className='font-light'>Our brands are synonymous with exquisite accommodations, exquisite dining experiences, and an array of captivating entertainment options</p>
                </div>
                <div className='flex flex-col gap-5 w-fit bg-white px-10 py-5'>
                    <img src="/healthcare.png" alt="healthcare" className='max-w-[90px]' />
                    <h3 className='text-secondaryRed font-semibold text-2xl'>Healthcare</h3>
                    <p className='font-light'>Our brands are synonymous with exquisite accommodations, exquisite dining experiences, and an array of captivating entertainment options</p>
                </div>
                <div className='flex flex-col gap-5 w-fit bg-white px-10 py-5'>
                    <img src="/renewable.png" alt="renewable" className='max-w-[90px]' />
                    <h3 className='text-secondaryRed font-semibold text-2xl'>Renewable Energy</h3>
                    <p className='font-light'>Our brands are synonymous with exquisite accommodations, exquisite dining experiences, and an array of captivating entertainment options</p>
                </div>
            </div>

            <Link to={'/portfolio'} className=''>
                <button className='px-4 py-4 mt-10 bg-primaryBlue rounded-md w-[180px] text-white text-lg border-primaryBlue border hover:bg-white hover:text-primaryBlue'>EXPLORE</button>
            </Link>

        </section>
    )
}

export default SectionThree