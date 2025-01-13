import React from 'react'
import { useDisclosure } from '../../hooks/useDisclosure'
import TeamMemberModal from './TeamMemberModal'
import { boardMembers, teamMembersManagement } from '../../utils/data'

const Team = () => {
    const teammemberModal = useDisclosure()

    return (
        <div className='flex flex-col items-center'>
            <h3 className='text-secondaryRed rounded-full w-fit border border-secondaryRed p-1 px-2 font-semibold'>OUR TEAM</h3>
            <p className='text-xl max-w-[60%] text-center mt-4 font-normal tracking-[1.5px]'>We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
            <h2 className='text-4xl font-semibold mt-10'>Our Leadership - <span className='text-primaryBlue font-bold'>BOARD</span></h2>
            <div className='mt-20 flex flex-wrap gap-12 justify-center w-full max-w-max mx-auto'>
                {boardMembers.map((member) => (
                    <div
                        key={member.id}
                        className='shadow-[0px_0px_25px_7px_rgba(0,0,0,0.1)]'
                        onClick={teammemberModal.open}
                    >
                        <img
                            src={member.image}
                            alt={member.alt}
                            className='w-[300px] object-cover h-[320px]'
                        />
                        <div className='flex justify-center items-center flex-col gap-4 p-5'>
                            <p className='font-semibold text-xl'>{member.name}</p>
                            <p className='text-sm font-light text-secondaryRed'>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className='text-4xl font-semibold mt-20'>Our Leadership - <span className='text-primaryBlue font-bold'>MANAGEMENT</span></h2>
            <div className='mt-20 flex flex-wrap gap-12 justify-center w-full max-w-max mx-auto'>
                {teamMembersManagement.map((member) => (
                    <div
                        key={member.id}
                        className='shadow-[0px_0px_25px_7px_rgba(0,0,0,0.1)]'
                        onClick={teammemberModal.open}
                    >
                        <img
                            src={member.image}
                            alt={member.alt}
                            className='w-[300px] object-cover h-[320px]'
                        />
                        <div className='flex justify-center items-center flex-col gap-4 p-5'>
                            <p className='font-semibold text-xl'>{member.name}</p>
                            <p className='text-sm font-light text-secondaryRed uppercase'>
                                {member.position}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {teammemberModal.isOpen && <TeamMemberModal modal={teammemberModal} />}

        </div>
    )
}

export default Team