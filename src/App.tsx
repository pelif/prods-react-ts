import React, { useState } from 'react';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Categories from './pages/Categories';
import Products from './pages/Products';

import Modal from './components/ModalCategory';
import FormCategory from './components/FormCategory';
import FormProduct from './components/FormProduct';
import { Category } from './services/types.category';

import { addCategory } from './services/categories';

function App() {  

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState(null);
  const [modalContentType, setModalContentType] = React.useState<JSX.Element | null>(null);
  
  // const openModal = (type: string): boolean => {
  //   setIsModalOpen(true);
  //   // setModalContentType(getModalContent(type));
  //   return true;
  // };

  // const getModalContent = (type: string|null) => {
  //   switch (type) {
  //     case 'category':
  //       return <FormCategory />;
  //     case 'product':
  //       return <FormProduct />;
  //     default:
  //       return null;
  //   }
  // }

  // const closeModal = (): void => {    
  //   setIsModalOpen(false);
  // }
  
  return (
    <div>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
            path="/categories" 
            element={<Categories 
                      isModalOpen={isModalOpen} 
                      setIsModalOpen={setIsModalOpen}/>} />

          <Route 
            path="/products" 
            element={<Products />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
