import React, { useEffect, useState } from 'react';

import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;    
    children: React.ReactNode;    
}

const ModalCategory = ({ isOpen, closeModal, children }: ModalProps) => {

    return (
        <div className={isOpen ? styles.show : styles.hide}>        
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h2>Cadastro de Categorias</h2>
                {children}
            </div>        
        </div>
    );

};

export default ModalCategory;