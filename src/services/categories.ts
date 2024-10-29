import { Category }  from "./types.category";
import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3005';

export const fetchCategories = async (): Promise<Category[]> => {
    const endpoint = `${API_URL}/categories`;
   
    try {
      const response: AxiosResponse<{ categories: Category[] }> = await axios.get(endpoint, {
        headers: {
          'Content-Type': 'application/json',
        },
      });    
     
      return response.data.categories; 

      } catch (error) {
            console.error(`Failed to fetch categories: ${error}`);
            throw error;
      }
}; 

export const addCategory = async (category: Category): Promise<Category> => {
    const response = await fetch(`${API_URL}/categories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    });

    if(!response.ok) {
        throw new Error(`Failed to add category: ${response.statusText}`);
    }   

    return await response.json();
}; 