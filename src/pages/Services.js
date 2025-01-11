import React, { useEffect } from 'react'
import PageBanner from '../components/PageBanner'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

const Services = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <section>
            <PageBanner text='Services' image='servicesbanner' />
            <div className='flex flex-col items-center py-40'>
                <h3 className='text-secondaryRed rounded-full w-fit border border-secondaryRed p-1 px-2 font-semibold'>OUR SERVICES</h3>
                <p className='text-2xl font-semibold max-w-[60%] text-center mt-4'>PanAfrican Capital Ghana Limited in line with its vision
                    and mission, is structured to deliver value through</p>

                <div className='mt-20 flex gap-20'>
                    <div className='w-full max-w-[400px] shadow-[0px_0px_25px_7px_rgba(0,0,0,0.1)] hover:-translate-y-4'>
                        <img src="/advisory.png" alt="advisory" className='w-full h-[300px] border-b object-cover' />
                        <div className='flex flex-col gap-3 items-center p-5'>
                            <h2 className='text-2xl font-semibold'>Financial Advisory</h2>
                            <p className='text-center font-light text-lg tracking-[1px]'>We have a vast financial advisory experience which is premised on our dynamic in-depth business,
                                sector, and market knowledge</p>
                        </div>

                        <Link to={'/services/financial-advisory'} className='border-t text-secondaryRed w-full py-4 flex justify-between px-6 items-center text-lg hover:bg-secondaryRed hover:text-white'>Explore More <span><FaArrowRightLong /></span></Link>

                    </div>

                    <div className='w-full max-w-[400px] shadow-[0px_0px_25px_7px_rgba(0,0,0,0.1)] hover:-translate-y-4'>
                        <img src="/capital.png" alt="capital" className='w-full h-[300px] border-b object-cover' />
                        <div className='flex flex-col gap-3 items-center p-5'>
                            <h2 className='text-2xl font-semibold'>Capital Raising Advisory</h2>
                            <p className='text-center font-light text-lg tracking-[1px]'>Our Capital Raising advisory services cut across all sectors of the economy and we support both
                                the private sector and public sector</p>
                        </div>
                        <Link to={'/services/capital-raising-advisory'} className='border-t text-secondaryRed w-full py-4 flex justify-between px-6 items-center text-lg hover:bg-secondaryRed hover:text-white'>Explore More <span><FaArrowRightLong /></span></Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services