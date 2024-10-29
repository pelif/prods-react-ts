import React, { useEffect , useState } from 'react';

import styles from './Modal.module.css';

interface ModalProps {   
    // children: React.ReactNode;
    isOpen: boolean;
    closeModal: () => void;
}

const Modal = ({ isOpen, closeModal }: ModalProps) => {

    useEffect(() => {}, [isOpen]);

    return (
        <div id="modal" className={isOpen ? styles.show : styles.hide}>
            <div 
                className={styles.fade} 
                onClick={closeModal}>                
            </div>
            <div className={styles.modal}>    
                <h2>Modal Title</h2>            
            </div>
        </div>
    );

}; 

export default Modal;