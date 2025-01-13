import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
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
        text: 'Services',
        path: '/services',
    },
    {
        text: 'Contact',
        path: '/contact',
    },

]

const Navbar = () => {
    const { pathname } = useLocation()

    return (
        <nav className='bg-primaryBlue relative'>
            <div className='bg-white '>
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
            <div className='w-full sticky left-0 top-0 py-6 max-w-max mx-auto flex justify-between items-center'>

                <div className='flex gap-16 justify-start w-full  text-xl'>
                    {
                        links.map((item, index) =>
                            <Link
                                className={`${pathname === item.path ? 'border-b-2 border-secondaryRed text-secondaryRed' : ''} pb-1 text-white hover:text-secondaryRed`} key={index} to={item.path}>{item.text}
                            </Link>)
                    }
                </div>
                <div>
                    <span className='text-white'><FiMenu size={32} /></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar