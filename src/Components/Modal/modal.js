import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ closeModal, modalContent, id }) => {
  return ReactDOM.createPortal(
    <Dimmer onClick={() => closeModal(id)}>
      <ModalBody onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={() => closeModal(id)}>X</CloseIcon>
           <ModalContent>{modalContent}</ModalContent>
      </ModalBody>
    </Dimmer>,
    document.getElementById("modal")
  );
};

export default Modal;

const Dimmer = styled.div``;

const ModalBody = styled.div``;

const CloseIcon = styled.span``;

const ModalContent = styled.div``;
