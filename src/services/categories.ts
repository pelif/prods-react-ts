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
  try {
    const response = await axios.post(`${API_URL}/categories`, category, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to add category: ${error}`);
  }
};