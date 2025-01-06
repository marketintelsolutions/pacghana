import React from 'react'

const Team = () => {
    return (
        <div className='flex flex-col items-center'>
            <h3 className='text-secondaryRed rounded-full w-fit border border-secondaryRed p-1 px-2 font-semibold'>OUR TEAM</h3>
            <h2 className='text-4xl font-semibold mt-4'>Our Skilled Leaders</h2>
            <p className='text-xl max-w-[60%] text-center mt-10 font-light'>We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>

            <div className='mt-20 flex flex-wrap gap-12 justify-center w-full max-w-max mx-auto'>
                <div className='shadow-[0px_0px_25px_7px_rgba(0,0,0,0.1)]'>
                    <img src="/sina.png" alt="sina" className='w-[300px] object-cover h-[320px]' />
                    <div className='flex justify-center items-center flex-col gap-4 p-5'>
                        <p className='font-semibold text-xl'>Sina Alimi</p>
                        <p className='text-sm font-light text-secondaryRed'>DIRECTOR</p>
                    </div>
                </div>
                <div className='shadow-[0px_0px_25px_7px_rgba(0,0,0,0.1)]'>
                    <img src="/kojo.png" alt="kojo" className='w-[300px] object-cover h-[320px]' />
                    <div className='flex justify-center items-center flex-col gap-4 p-5'>
                        <p className='font-semibold text-xl'>Kojo Poku</p>
                        <p className='text-sm font-light text-secondaryRed'>ACTING CHAIRMAN</p>
                    </div>
                </div>
                <div className='shadow-[0px_0px_25px_7px_rgba(0,0,0,0.1)]'>
                    <img src="/chris.png" alt="chris" className='w-[300px] object-cover h-[320px]' />
                    <div className='flex justify-center items-center flex-col gap-4 p-5'>
                        <p className='font-semibold text-xl'>Chris Oshiafi</p>
                        <p className='text-sm font-light text-secondaryRed'>DIRECTOR</p>
                    </div>
                </div>
                <div className='shadow-[0px_0px_25px_7px_rgba(0,0,0,0.1)]'>
                    <img src="/eric.png" alt="eric" className='w-[300px] object-cover h-[320px]' />
                    <div className='flex justify-center items-center flex-col gap-4 p-5'>
                        <p className='font-semibold text-xl'>Eric Okoruwa</p>
                        <p className='text-sm font-light text-secondaryRed'>DIRECTOR</p>
                    </div>
                </div>
                <div className='shadow-[0px_0px_25px_7px_rgba(0,0,0,0.1)]'>
                    <img src="/bolarinwa.png" alt="bolarinwa" className='w-[300px] object-cover h-[320px]' />
                    <div className='flex justify-center items-center flex-col gap-4 p-5'>
                        <p className='font-semibold text-xl'>Bolarinwa Sanni</p>
                        <p className='text-sm font-light text-secondaryRed'>MANAGING DIRECTOR</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team