import React from 'react'
import { Link } from 'react-router'
import { trackRecord } from '../../utils/data'

const SectionThree = () => {
    return (
        <section className='flex flex-col items-center pb-40'>
            <h3 className='text-secondaryRed rounded-full w-fit border border-secondaryRed p-1 px-2 font-semibold'>OUR TRACK RECORD</h3>
            <h2 className='text-4xl mt-4'>Finance and Capital Advisory</h2>
            <p className='max-w-[50%] mt-6 text-center text-xl font-light'>Our track record
                speaks for itself
                with major milestones
                across several sectors
                of the economy...</p>

            <div className='grid grid-cols-3 w-full max-w-max mx-auto bg-primaryBlue p-[1px] gap-[1px] mt-20'>
                {
                    trackRecord.map((item, index) => <div key={index} className='w-full flex flex-col bg-white px-10 py-5'>
                        <div className='flex justify-center h-[80px]'>
                            {item.company && <h3 className='text-primaryBlue font-semibold text-[28px] text-center'>{item.company}</h3>}
                            {item.image && <img src={`/${item.image}.png`} alt="financial" className='max-w-[180px] h-full object-contain'
                            />}
                        </div>
                        <p className='font-semibold text-lg text-center mt-4 h-[40px]'>{item.project}</p>
                        <h1 className='text-4xl font-bold text-center mt-10'>${item.price}</h1>
                        <div className='h-[1px] w-full bg-black max-w-[200px] mx-auto mt-3'></div>
                        <p className='font-light text-center mt-2'>{item.role}</p>
                    </div>)
                }


            </div>

            {/* <Link to={'/portfolio'} className=''>
                <button className='px-4 py-4 mt-10 bg-primaryBlue rounded-md w-[180px] text-white text-lg border-primaryBlue border hover:bg-white hover:text-primaryBlue'>EXPLORE</button>
            </Link> */}

        </section>
    )
}

export default SectionThree