import React, { Component, useEffect, useState } from "react";
import FormCategory from "../components/FormCategory";
import { Category } from "../services/types.category";
import { fetchCategories, addCategory } from "../services/categories";
import ListCategory from "../components/ListCategory";

interface CategoriesProps {
    openModal: (type: string) => boolean;
    closeModal: () => void; 
}


// const Categories: React.FC = () => {
const Categories = ({ openModal, closeModal }: CategoriesProps) => {

    const [categories, setCategories] = useState<Category[]>([]);    
   
    useEffect(() => {
        const loadCategories = async () => {
            try {
                const resCategories = await fetchCategories();                
                setCategories(resCategories);                          
            } catch (error) {
                console.log(`Failed to load categories: ${error}`);                
            }            
        }; 
        loadCategories();        
    }, []);

    return (
        <div className="container text-left">            
            <div className="col-12">
                <h1 className="my-3"><i className="bi bi-bar-chart-steps ms-5 me-5 my-5"></i>Categories</h1>
            </div>            
            <FormCategory />
            <ListCategory 
                categories={categories} 
                openModal={openModal} 
                closeModal={closeModal}/>
        </div>
    );
};

export default Categories