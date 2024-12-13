import React from 'react';

import { Category } from '../services/types.category';
import Modal from './ModalCategory';
import FormCategory from './FormCategory';

interface ListCategoryProps {
    categories: Category[];
    isOpen: boolean; 
    openModal: () => void;
    closeModal: () => void;
}

// const ListCategory: React.FC<ListCategoryProps> =  ({categories}) => {

const ListCategory =  ({categories, isOpen, openModal, closeModal}: ListCategoryProps) => {
   
    return (
       <>
          <table className="table table-striped table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.length > 0 ? (            
                categories.map((category, index) => (                   
                    <tr key={index} className="py-5 px-5">
                        <td>{category.name}</td>
                        <td>
                            <i 
                                className="bi bi-pencil me-4" 
                                role='button'
                                onClick={openModal}></i>

                            <i 
                                className='bi bi-trash' 
                                role='button'></i>
                        </td>
                    </tr>
                    
                ))                
            ) : (
                <p>There are no categories</p>
            )}
          </tbody>
          </table>
         
       </>
    );
};

export default ListCategory; 