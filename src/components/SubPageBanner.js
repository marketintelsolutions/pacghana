import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router'

const SubPageBanner = ({ image, text }) => {
    return (
        <section className='min-h-[400px] relative' style={{ backgroundImage: `url(/${image}.jpg)`, backgroundSize: 'cover', backgroundPosition: '0% 50%' }}>
            <div className='absolute top-0 left-0 h-full w-full bg-[#00000051] flex items-center '>
                <div className='flex w-full max-w-max mx-auto items-center justify-between'>
                    <h1 className='text-[70px] font-semibold text-white'>{text}</h1>

                    <div className='flex gap-2 text-white text-lg font-light items-center '>
                        <Link to={'/'} className='opacity-60'>HOME</Link>
                        <span><FaChevronRight /></span>
                        <Link to={'/services'} className='opacity-60'>SERVICES</Link>
                        <span><FaChevronRight /></span>
                        <p className='uppercase'>{text}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubPageBanner