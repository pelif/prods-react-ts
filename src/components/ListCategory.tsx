import React from 'react';

import { Category } from '../services/types.category';

interface ListCategoryProps {
    categories: Category[];
}

const ListCategory: React.FC<ListCategoryProps> =  ({categories}) => {
    
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
                            <i className='bi bi-pencil me-4' role='button'></i>
                            <i className='bi bi-trash' role='button'></i>
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