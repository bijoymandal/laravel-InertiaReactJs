import React from 'react';
import '../../css/ConfirmModal.css';

const ConfirmModal = ({isOpen, onClose, onConfirm, message}) => {

    if (!isOpen) return null;
    return (
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <h2>Confirm Action</h2>
                    <p>{message}</p>
                    <div className="modal-buttons">
                        <button className="button button-secondary" onClick={onClose}>Cancel</button>
                        <button className="button button-danger" onClick={onConfirm}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConfirmModal;
