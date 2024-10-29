import React from 'react';

const FormProduct = () => {
    return (
        <div className="row align-items-center mt-5">
            <form>
                <div className="mb-3">
                    <input
                        className="form-control me-2 p-3 border border-success"
                        type="text"
                        name="name"
                        placeholder="Digite o produto"/>                    
                </div>
                <div className="mb-3">
                    <input
                        className="form-control me-2 p-3 border border-success"
                        type="text"
                        name="price"
                        placeholder="Digite o Preço"/>                    
                </div>
                <div className="mb-3">
                    <select 
                        name="category" 
                        className='form-select me-2 p-3 border border-success'>
                        <option>Selecione uma categoria</option>
                    </select>
                </div>
                <div className="mb-3 mt-5">
                    <button 
                        className="btn btn-outline-success p-3 fw-bold" 
                        type="submit">
                        Salvar Produto
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormProduct;