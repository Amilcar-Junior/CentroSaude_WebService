import React from 'react';
import Modal from 'react-modal';

const divStyle = {
    height: '80vh',
    overflow: 'scroll',
    overflowX: 'hidden',
}

const ModalPopup = ({ children, modalIsOpen, openModal }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={openModal}
            className="Modal"
            overlayClassName="Overlay"
        >
            {children}

        </Modal>
    )
}
export default ModalPopup
