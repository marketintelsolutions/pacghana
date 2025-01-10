import React from 'react'
import PageBanner from '../components/PageBanner'

const CapitalRaisingAdvisory = () => {
    return (
        <section>
            <PageBanner text='Capital Raising Advisory' image='servicesbanner' />
            <div className='py-40 max-w-max mx-auto flex gap-20 items-center'>
                <div className='max-w-[50%] '>
                    <h3 className='text-secondaryRed rounded-full w-fit border border-secondaryRed p-1 px-2 font-semibold'>CAPITAL RAISING ADVISORY</h3>
                    <h2 className='text-4xl font-semibold mt-4 capitalize'>  proven track-record of
                        successful delivery on fund raising mandates</h2>
                    <p className='text-2xl text-justify mt-10 font-light leading-[37px]'>
                        Our Capital Raising advisory services cut across all sectors of the economy and we support both
                        the private sector, public sector and the Public Private Partnership projects.
                        <br /><br />
                        We have strong partnerships with various multi-lateral funding agencies such as Development
                        Finance Institutions (DFI) and Export Credit Agencies (ECA), as well as local funding institutions
                        such as commercial banks and government intervention funds. We have a proven track-record of
                        successful delivery on fund raising mandates in Ghana and other West African countries.

                    </p>
                </div >
                <div className='w-full '>
                    <img src="/capital.png" alt="capital" className='w-full  object-cover' />
                </div>
            </div>

            <h2 className='text-4xl font-semibold max-w-[70%] text-center tracking-[1px] mx-auto'>We have expertise and transaction
                experiences in arranging various types of facilities including</h2>
            <div className='flex gap-32 items-center  pb-40 mx-auto max-w-max mt-14'>
                <div className='w-full max-w-[50%]'>
                    <img src="/capital2.jpg" alt="capital2" className='w-full max-h-[500px] rounded-[10px] object-cover' />
                </div>
                <div>
                    <ul className='list-disc flex flex-col gap-5 text-[24px] font-light py-0'>

                        <li>Equity Finance </li>
                        <li>Mezzanine </li>
                        <li>Corporate Finance </li>
                        <li>Project Finance </li>
                        <li>Infrastructure Finance </li>
                        <li>Structured Trade Finance </li>
                        <li> Working Capital Funding</li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default CapitalRaisingAdvisory