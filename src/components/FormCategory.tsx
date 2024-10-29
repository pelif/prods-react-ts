import React from "react";

const FormCategory = () => {
    return (
        <div className="row align-items-center mt-5">
            <form>
                <div className="mb-3">
                    <input
                        className="form-control me-2 p-3 border border-success"
                        type="text"
                        placeholder="Digite a categoria"/>                    
                </div>
                <div className="mb-3 mt-5">
                    <button 
                        className="btn btn-outline-success p-3 fw-bold" 
                        type="submit">
                        Salvar Categoria
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormCategory;