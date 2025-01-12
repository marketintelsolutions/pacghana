import React, { useEffect } from 'react'
import PageBanner from '../components/PageBanner'
import { CiLocationOn } from 'react-icons/ci'
import { IoCall } from 'react-icons/io5'
import { SiMinutemailer } from 'react-icons/si'

const Contact = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <section>
            <PageBanner text='Contact' image='contactbanner' />

            <div className='pt-40 flex gap-10 w-full max-w-max mx-auto items-center'>
                <div className='w-full max-w-[35%]'>
                    <h2 className='text-secondaryRed text-base font-semibold'>CONTACT DETAILS</h2>

                    <h1 className='text-[45px] font-medium mt-3' >Our Contacts</h1>

                    <p className='text-base mt-8 tracking-[1px] leading-[30px]'>
                        Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                    </p>

                    <div className='flex flex-col gap-14 mt-10'>
                        <div className=' flex gap-5 items-center'>
                            <span className='text-white p-4 bg-secondaryRed rounded-full'><CiLocationOn size={60} /></span>
                            <div className='flex flex-col gap-3'>
                                <p className='font-semibold text-xl'>Visit us Daily</p>
                                <p className='max-w-[350px]'>PanAfrican Capital (GH) LLP,
                                    8, Blohum Street, Dzorwulu,
                                    Along Dzorwulu Road, P.M.B CT 252,
                                    Cantonments, Accra, Ghana.</p>
                            </div>
                        </div>
                        <div className=' flex gap-5 items-center'>
                            <span className='text-white p-4 bg-secondaryRed rounded-full'><IoCall size={60} /></span>
                            <div className='flex flex-col gap-3'>
                                <p className='font-semibold text-xl'>Call Us 24/7</p>
                                <p className='max-w-[350px]'>+ 233 (0) 303 953550</p>
                            </div>
                        </div>
                        <div className=' flex gap-5 items-center'>
                            <span className='text-white p-4 bg-secondaryRed rounded-full'><SiMinutemailer size={60} /></span>
                            <div className='flex flex-col gap-3'>
                                <p className='font-semibold text-xl'>Mail Us</p>
                                <p className='max-w-[350px]'>info@panafricancapitalgh.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/contact.png" alt="" />
                </div>
            </div>

            <div className='w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.3562610806405!2d-0.20777565281454097!3d5.609409194964731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bb6044292bd%3A0xe837f5e129f97b80!2s8%20Blohum%20Rd%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sng!4v1736640833990!5m2!1sen!2sng" width="100%" height="450" style={{ border: 0 }} referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </section>
    )
}

export default Contact