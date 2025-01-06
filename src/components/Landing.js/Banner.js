import React, { useEffect, useState } from 'react'

const Banner = () => {
    const [currBg, setCurrBg] = useState(0)

    const backgrounds = ['meeting', 'portfoliobanner', 'aboutbanner']



    useEffect(() => {
        const handleNext = () => {
            setCurrBg((prev) => (prev + 1) % backgrounds.length)
        }

        const interval = setInterval(() => {
            handleNext()
        }, 4000);

        return () => clearInterval(interval)
    }, [])


    return (
        <section className=' min-h-[900px] relative' style={{ backgroundImage: `url(/${backgrounds[currBg]}.jpg)`, backgroundSize: 'cover' }}>
            <div className='absolute top-0 left-0 bg-[#0000005a]  h-full w-full'>
                <div className='w-full max-w-max mx-auto pt-60 '>
                    <div className='border border-secondaryRed px-1 w-fit rounded-full py-1 flex gap-4'>
                        <p className='text-secondaryRed font-semibold font- bg-white rounded-full px-3'>WELCOME</p>
                        <p className='text-white'>WE DELIVER THE BEST SOLUTIONS</p>
                    </div>

                    <h1 className='mt-10 text-[75px] max-w-[70%] font-semibold text-white tracking-[2px] leading-[80px]'>
                        We Provide The Best Investment Solutions
                    </h1>
                    <p className='text-2xl text-white max-w-[50%] mt-10 font-light'>
                        We are a
                        PanAfrican Capital Holdings Company
                        with special focus on key sectors across
                        emerging and frontier markets in Africa.
                    </p>

                    <div className='flex gap-20 mt-12 '>
                        <button className='px-4 py-4 bg-primaryBlue rounded-md w-[180px] text-white text-lg border-primaryBlue border hover:bg-white hover:text-primaryBlue'>EXPLORE</button>
                        <button className='px-4 py-4 border border-primaryBlue hover:bg-primaryBlue rounded-md w-[180px] text-white text-lg'>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner