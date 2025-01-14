import React, { useState } from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaLocationDot } from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
import { IoCall, IoCloseOutline } from 'react-icons/io5'
import { SiMinutemailer } from 'react-icons/si'
import { Link, useLocation } from 'react-router'

const links = [
    {
        text: 'Home',
        path: '/',
    },
    {
        text: 'About',
        path: '/about',
    },
    {
        text: 'Milestones',
        path: '/milestones',
    },
    {
        text: 'Services',
        path: '/services',
    },
    {
        text: 'Contact',
        path: '/contact',
    },

]

const Navbar = () => {
    const [isSidebar, setIsSidebar] = useState(false)

    const { pathname } = useLocation()

    return (
        <>
            <div className='bg-white relative'>
                <div className='w-full max-w-max mx-auto flex justify-between py-4 items-center'>
                    <img src="/logo.jpeg" alt="logo" className='max-w-[250px]' />

                    <div className='flex gap-10'>
                        <div className='flex gap-4 items-center'>
                            <span className='text-secondaryRed'><BsTelephoneFill size={40} /></span>
                            <div className='flex flex-col gap-2'>
                                <p>Have any Questions?</p>
                                <p> + 233 (0) 303 953550</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <span className='text-secondaryRed'><FaLocationDot size={40} /></span>
                            <div className='flex flex-col gap-2'>
                                <p>Contact us</p>
                                <p> 8, Blohum Street, Dzorwulu, Accra, Ghana</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Sticky navigation wrapper */}
            <nav className='sticky top-0 left-0 w-full bg-primaryBlue z-50'>
                <div className='w-full max-w-max mx-auto flex justify-between items-center py-6'>
                    <div className='flex gap-16 justify-start w-full text-xl'>
                        {links.map((item, index) => (
                            <Link
                                className={`${pathname === item.path ? 'border-b-2 border-secondaryRed text-secondaryRed' : ''} pb-1 text-white hover:text-secondaryRed`}
                                key={index}
                                to={item.path}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                    <button onClick={() => setIsSidebar(true)}>
                        <span className='text-white'><FiMenu size={32} /></span>
                    </button>
                </div>
            </nav>

            {isSidebar && <div className='fixed z-[99] top-0 left-0 h-lvh w-full flex justify-end bg-[#00000061]'>
                <div className='bg-white p-10 w-fit'>
                    <div className='flex justify-between'>
                        <img src="/logo.jpeg" alt="logo" className='max-w-[200px]' />
                        <button onClick={() => setIsSidebar(false)}><span><IoCloseOutline size={40} /></span></button>
                    </div>
                    <p className='max-w-[330px] mt-10'> We are a investment banking firm
                        that focuses extensively on providing
                        advisory services to its clients and
                        raising capital for both the private and
                        public sectors.</p>

                    <h2 className='mt-8 text-2xl font-semibold'>Our track Record</h2>

                    <div className='grid grid-cols-3 gap-4 mt-4'>
                        <img src="milestone1.jpg" alt="milestone1" className='max-w-[120px]' />
                        <img src="milestone2.jpg" alt="milestone2" className='max-w-[120px]' />
                        <img src="milestone3.jpg" alt="milestone3" className='max-w-[120px]' />
                    </div>
                    <h2 className='mt-8 text-2xl font-semibold'>Contact</h2>
                    <div className='flex flex-col gap-5 mt-8'>
                        <div className=' flex gap-5 items-center'>
                            <span className='text-secondaryRed'><CiLocationOn size={25} /></span>
                            <div className='flex flex-col gap-3'>
                                <p className='max-w-[350px]'>
                                    8, Blohum Street, Dzorwulu, Accra, Ghana.</p>
                            </div>
                        </div>
                        <div className=' flex gap-5 items-center'>
                            <span className='text-secondaryRed'><IoCall size={25} /></span>
                            <div className='flex flex-col gap-3'>
                                <p className='max-w-[350px]'>+ 233 (0) 303 953550</p>
                            </div>
                        </div>
                        <div className=' flex gap-5 items-center'>
                            <span className='text-secondaryRed'><SiMinutemailer size={25} /></span>
                            <div className='flex flex-col gap-3'>
                                <p className='max-w-[350px]'>info@panafricancapitalgh.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Navbar