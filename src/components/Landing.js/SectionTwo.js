import React from 'react'
import { Link } from 'react-router'

const SectionTwo = () => {
    return (
        <section className='pb-40'>
            <div className='w-full max-w-max mx-auto translate-y-[-50%] flex gap-10'>
                <div className='flex gap-10 items-center bg-white shadow-[0px_1px_30px_5px_rgba(0,0,0,0.1)] rounded-[10px] w-fit px-10 py-6'>
                    <img src="/financial.png" alt="financial" />
                    <p className='text-2xl text-black'>Financial Services</p>
                </div>
                <div className='flex gap-10 items-center bg-white shadow-[0px_1px_30px_5px_rgba(0,0,0,0.1)] rounded-[10px] w-fit px-10 py-6'>
                    <img src="/hospitality.png" alt="hospitality" />
                    <p className='text-2xl text-black'>Hospitality & Entertainment</p>
                </div>
                <div className='flex gap-10 items-center bg-white shadow-[0px_1px_30px_5px_rgba(0,0,0,0.1)] rounded-[10px] w-fit px-10 py-6'>
                    <img src="/estate.png" alt="estate" />
                    <p className='text-2xl text-black'>Real Estate & Infrastructure</p>
                </div>
            </div>

            <div className='w-full max-w-max mx-auto mt-20 flex gap-20 '>
                <img src="/corporate.jpg" className='max-w-[50%] object-cover rounded-[10px]' alt="corporate" />
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
                    <Link to={'/about'} className=''> <button className='px-4 py-4 mt-10 bg-primaryBlue rounded-md w-[180px] text-white text-lg border-primaryBlue border hover:bg-white hover:text-primaryBlue'>EXPLORE</button></Link>

                </div>
            </div>
            <div className='w-full max-w-max mx-auto flex items-center gap-14 mt-20 '>

                <img src="afrexim.jpeg" alt="afrexim" className='object-cover max-w-[200px]' />
                <img src="commonwealth.jpeg" alt="commonwealth" className='object-cover max-w-[200px]' />
                <img src="atlantic.jpeg" alt="atlantic" className='object-cover max-w-[200px]' />
                <img src="axendo.jpeg" alt="axendo" className='object-cover max-w-[200px]' />
                <img src="sfcapital.jpeg" alt="sfcapital" className='object-cover max-w-[200px]' />
            </div>
        </section>
    )
}

export default SectionTwo