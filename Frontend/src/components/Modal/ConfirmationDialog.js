import React from 'react';
import Modal from 'react-modal';



const ConfirmationDialog = ({title, modalIsOpen, openModal, remove, id}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={openModal}
            className="ModalDialog"
            overlayClassName="Overlay"
        >
            <div>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header row justify-content-center" style={{ marginLeft: '1px' }}  >
                            <div className="col-12  text-center">
                                <h5 class="modal-title" id="staticBackdropLabel">{title}</h5>
                            </div>

                        </div>

                        <div class="modal-footer row justify-content-center" style={{ marginLeft: '1px' }}>
                            <div className="col-lg-5 row" >
                                <button type="button" onClick={() => remove(id)} class="btn btn-primary">Eliminar</button>
                            </div>
                            <div className="col-lg-5 row" >
                                <button type="button" onClick={openModal} class="btn btn-danger">Cancelar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default ConfirmationDialog;