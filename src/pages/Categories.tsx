import React, { Component, useEffect, useState } from "react";
import FormCategory from "../components/FormCategory";
import { Category } from "../services/types.category";
import { fetchCategories, addCategory } from "../services/categories";
import ListCategory from "../components/ListCategory";
import ModalCategory from "../components/ModalCategory";

interface CategoriesProps {
    isModalOpen: boolean;  
    setIsModalOpen: (isOpen: boolean) => void;  
}


// const Categories: React.FC = () => {
const Categories = ({ isModalOpen, setIsModalOpen }: CategoriesProps) => {

    const [categories, setCategories] = useState<Category[]>([]);   
    
    const [category, setCategory] = useState<Category | null>({ id: Math.random().toString(), name: '' });   
    const [error, setError] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitCategory = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (!category || !category.name.trim()) {
            console.error("O nome da categoria é obrigatório.");
            return;
        }
    
        try {
            const newCategory = await addCategory(category);            

            const updatedCategories = await fetchCategories();
            await setCategories(updatedCategories);
            
            await setCategory({ id: Math.random().toString(), name: '' });
        } catch (error) {
            console.error("Erro ao adicionar categoria:", error);
        }
    };
    
   
    useEffect(() => {
        const loadCategories = async () => {
            try {
                const resCategories = await fetchCategories();                
                console.log(resCategories);
                await setCategories(resCategories);     

            } catch (error) {
                console.log(`Failed to load categories: ${error}`);                
            }            
        }; 
        loadCategories();        
    }, []);

    const handleSetCategory = (category: Category | null) => {
        setCategory(category);
    };

    return (        
        <>
            <ModalCategory 
                isOpen={isModalOpen} 
                closeModal={closeModal} 
                children={<FormCategory 
                            categories={categories} 
                            setCategories={setCategories} 
                            category={category} 
                            handleSubmitCategory={handleSubmitCategory} 
                            setCategory={setCategory} />} 
            />
            <div className="container text-left">            
                <div className="col-12">
                    <h1 className="my-3"><i className="bi bi-bar-chart-steps ms-5 me-5 my-5"></i>Categories</h1>
                </div>            
                <FormCategory 
                    categories={categories} 
                    setCategories={setCategories}
                    category={category} 
                    handleSubmitCategory={handleSubmitCategory} 
                    setCategory={handleSetCategory}
                    />
                <ListCategory 
                    categories={categories} 
                    isOpen={isModalOpen} 
                    openModal={openModal}
                    closeModal={closeModal}/>
            </div> 
        </>       
    );
};

export default Categories