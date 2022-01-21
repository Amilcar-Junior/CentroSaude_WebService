import React from 'react';
import Modal from 'react-modal';



const ImageModal = ({children, modalIsOpen, openModal}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={openModal}
            className="ModalImage"
            overlayClassName="Overlay"
        >
            <div>
                {children}
            </div>
        </Modal>
    )
}
export default ImageModal;