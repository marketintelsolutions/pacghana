import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdHomeWork } from 'react-icons/md'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <footer className='bg-primaryBlue py-20 text-white'>
            <div className='w-full max-w-max mx-auto flex flex-wrap gap-10 px-6 lg:px-0 justify-between'>
                <div className='h-[200px] flex flex-col justify-between'>
                    <div className='flex items-center gap-3 '>
                        <img src="/logo2.jpeg" alt="logo" className='max-w-[250px]' />
                        {/* <h1 className='text-[39px]'>PAC GHANA</h1> */}
                    </div>
                    <p className='text-sm font-extralight'>
                        © 2024 PAC GHANA
                    </p>
                </div>
                <div className='flex  gap-10 md:gap-24 lg:gap-40 w-[40%]'>
                    <div className='flex flex-col gap-5 w-[300px]'>
                        <Link to={'/'} className='text-base  font-roboto'>Home</Link>
                        <Link to={'/about'} className='text-base  font-roboto'>About Us</Link>
                        <Link to={'/services'} className='text-base  font-roboto'>Services</Link>
                        <Link to={'contact'} className='text-base  font-roboto'>Contact</Link>
                    </div>
                    <div className='flex flex-col justify-between h-[200px]'>
                        <p className='text-base font-roboto'>PanAfrican Capital (GH) LLP,
                            8, Blohum Street, Dzorwulu,
                            Along Dzorwulu Road, P.M.B CT 252,
                            Cantonments, Accra, Ghana.
                        </p>
                        <p className='mt-4'>info@panafricancapitalgh.com</p>
                        <div className='flex items-center gap-4 h-full pt-6 pb-2  border-b-4 border-transparent '>
                            <span><FaFacebookF size={16} /></span>
                            <span><FaTwitter size={16} /></span>
                            <span><FaInstagram size={16} /></span>
                            <span><FaLinkedinIn size={16} /></span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer