import React, { useState } from "react";
import { addCategory } from "../services/categories";
import { Category } from "../services/types.category";

const FormCategory = () => {

    const [category, setCategory] = useState(""); 
    const [error, setError] = useState(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const fakeCategory: Category = {
                id: Math.random().toString(),
                name: category
            }; 
            const newCategory = await addCategory(fakeCategory);
            console.log("Categoria adicionada:", newCategory);
            setCategory("");
        } catch (error) {
            console.error("Erro ao adicionar categoria:", error);
        }
    }; 

    return (
        <div className="row align-items-center mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        className="form-control me-2 p-3 border border-success"
                        type="text"
                        value={category}
                        placeholder="Digite a categoria"
                        onChange={(event) => setCategory(event.target.value)}/>                    
                </div>
                <div className="mb-3 mt-5">
                    <button 
                        className="btn btn-outline-success p-3 fw-bold" 
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