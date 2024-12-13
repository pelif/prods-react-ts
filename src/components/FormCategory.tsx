import React, { useState } from "react";
import { addCategory } from "../services/categories";
import { Category } from "../services/types.category";
import ModalCategory from "./ModalCategory";

interface FormCategoryProps {
    categories: Category[];
    setCategories: (categories: Category[]) => void;
    category: Category | null;
    handleSubmitCategory: (event: React.FormEvent<HTMLFormElement>) => void;
    setCategory: (category: Category | null) => void;
  }

const FormCategory = ({ 
    categories,
    setCategories,
    category,
    handleSubmitCategory,
    setCategory,
}: FormCategoryProps) => {

    const [name, setName] = useState('');
    
    const [error, setError] = useState(null);    

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (category) {            
            setCategory({ ...category, name: event.target.value });
            console.log(category);
        } else {            
            setCategory({ id: Math.random().toString(), name: event.target.value });
        }
    };

    return (
        <div className="row align-items-center mt-5 w-75">            
            
            <form onSubmit={handleSubmitCategory}>
                <div className="col-md-12">
                    <input
                        className="form-control me-2 p-3 border border-success"
                        type="text"
                        value={category ? category.name : ""}
                        placeholder="Digite a categoria"
                        onChange={handleInputChange}
                        required/>                    
                </div>
                <div className="col-md-12 mt-5">
                    <button 
                        className="btn btn-outline-success p-3 fw-bold w-100" 
                        type="submit">
                        Salvar Categoria
                    </button>
                </div>
                {error && <p className="text-danger">{error}</p>}
            </form>
        </div>
    );

};

export default FormCategory;