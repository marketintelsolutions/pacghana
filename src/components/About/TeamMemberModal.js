import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoClose } from "react-icons/io5";
import { style } from "./config";

const TeamMemberModal = ({ modal, selectedTeamMember }) => {
    console.log('selectedTeamMember', selectedTeamMember);
    return (
        <Modal
            open={modal.isOpen}
            onClose={modal.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="backdrop-blur-[3px]"
        >
            <Box
                sx={style}
                className="bg-white relative  max-w-[870px] w-full  min-h-[500px] overflow-hidden rounded-[15px] flex gap-16"
            >
                <span onClick={modal.close} className="absolute cursor-pointer top-5 right-5"><IoClose size={25} /></span>
                <div className="w-full max-w-[40%]"><img src={selectedTeamMember.image} alt="person" className="h-full w-full object-cover" /></div>
                <div className="w-full max-w-[50%] py-20">
                    <h2 className="text-[30px]">{selectedTeamMember.name}</h2>
                    <p className="text-primaryBlue mt-4 font-light">{selectedTeamMember.position}</p>

                    <h3 className="font-bold underline mt-8 mb-6">About:</h3>
                    <div className="flex flex-col gap-3 max-h-[300px] overflow-y-scroll">
                        {
                            selectedTeamMember.details.map((item, index) => <p>{item}</p>)
                        }
                    </div>

                </div>
            </Box>
        </Modal>
    );
};

export default TeamMemberModal;
