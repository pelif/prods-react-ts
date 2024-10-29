import React from 'react';

import { Category } from '../services/types.category';
import Modal from './Modal';
import FormCategory from './FormCategory';

interface ListCategoryProps {
    categories: Category[];
    openModal: (type: string) => boolean; 
    closeModal: () => void;
}

// const ListCategory: React.FC<ListCategoryProps> =  ({categories}) => {

const ListCategory =  ({categories, openModal, closeModal}: ListCategoryProps) => {

    const handleOpenModal = (type: string) => {
        openModal(type);
    }; 
   
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
                categories.map((category) => (                   
                    <tr key={category.id} className="py-5 px-5">
                        <td>{category.name}</td>
                        <td>
                            <i 
                                className="bi bi-pencil me-4" 
                                role='button'
                                onClick={() => handleOpenModal('category')}></i>

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