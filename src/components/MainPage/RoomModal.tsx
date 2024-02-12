import React from 'react'
import styled from 'styled-components';

interface RoomModalProps {
    roomModalOpen: {
        isOpen: boolean,
        isCreate: boolean
    };
    setRoomModalOpen: React.Dispatch<React.SetStateAction<{
        isOpen: boolean,
        isCreate: boolean
    }>>;
};

const RoomModal : React.FC<RoomModalProps> = ({ roomModalOpen, setRoomModalOpen }) => {
  return (
    <ModalBackGroundContainer onClick={() => setRoomModalOpen({...roomModalOpen, isOpen: false})}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            
        </ModalContainer>
    </ModalBackGroundContainer>
  )
};

const ModalBackGroundContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000037;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    width: 100%;
    height: 350px;
    background-color: #E8DECF;
    border-radius: 5px;
`;

export default RoomModal;