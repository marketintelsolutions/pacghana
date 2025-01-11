import React, { useEffect } from 'react'
import PageBanner from '../components/PageBanner'

const FinancialAdvisory = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <section>
            <PageBanner text='Financial Advisory' image='financebanner' />
            <div className='py-40 max-w-max mx-auto flex gap-20'>
                <div className='max-w-[45%] '>
                    <h3 className='text-secondaryRed rounded-full w-fit border border-secondaryRed p-1 px-2 font-semibold'>FINANCIAL ADVISORY</h3>
                    <h2 className='text-4xl font-semibold mt-4'> Dynamic In-Depth Business,
                        Sector, And Market Knowledge</h2>
                    <p className='text-2xl text-justify mt-10 font-light leading-[37px]'>
                        We have a vast financial advisory experience which is premised on our dynamic in-depth business,
                        sector, and market knowledge which we have garnered over the years. This has enabled us to
                        continually deliver bespoke solutions to our growing client base, despite of the aggressively
                        changing industry fundamentals and market realities.
                    </p>
                </div >
                <div className='w-full'>
                    <img src="/advisory.png" alt="advisory" className='w-full  object-cover' />
                </div>
            </div>

            <h2 className='text-4xl font-semibold max-w-[70%] text-center tracking-[1px] mx-auto'>Some of the financial advisory solutions that
                we offer includes but not limited to</h2>
            <div className='flex gap-32 items-center pb-40 mx-auto max-w-max mt-10'>
                <div className='w-full max-w-[50%]'>
                    <img src="/advisory2.jpg" alt="advisory" className='w-full rounded-[10px] object-cover' />
                </div>
                <div>
                    <ul className='list-disc flex flex-col gap-3 text-[22px] font-light py-0'>
                        <li>Corporate Restructuring</li>
                        <li>Equity Capital Raise</li>
                        <li>Balance Sheet Re-structuring</li>
                        <li>Leveraged Buy-outs</li>
                        <li>Divestiture</li>
                        <li>Financial Due Diligence</li>
                        <li>Debt Structuring</li>
                        <li>Balance Sheet Optimization</li>
                        <li>Financial Vauation</li>
                        <li>Public Private Partnership Advisory</li>
                    </ul>

                </div>
            </div>
        </section >
    )
}

export default FinancialAdvisory