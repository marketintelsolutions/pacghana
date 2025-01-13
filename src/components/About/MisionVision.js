import React from 'react'

const MisionVision = () => {
    return (
        <div className='w-full max-w-max mx-auto mt-10 mb-20 flex gap-20'>
            <div className='w-full flex flex-col gap-20'>
                <div>
                    <h1 className='text-4xl font-bold text-primaryBlue flex items-center gap-4'>Vision
                        <img src="/vision.png" alt="vision" className='max-w-[50px]' /></h1>

                    <p className='text-4xl mt-8'>
                        To be the prefered
                        investment banking
                        firm in Africa.
                    </p>
                </div>
                <div >
                    <h1 className='text-4xl font-bold text-primaryBlue flex items-center gap-4'>Mission
                        <img src="/mission.png" alt="mission" className='max-w-[50px]' /></h1>


                    <p className='text-4xl mt-10'>
                        To create a professional and
                        goal-oriented institution that
                        anticipates and delivers on the
                        needs of all our stakeholders.
                    </p>
                </div>
            </div>
            <div className='max-w-[50%] w-full'>
                <img src="/mision.png" alt="mision-vision" className='w-full rounded-[10px] object-cover' />
            </div>

        </div>
    )
}

export default MisionVision