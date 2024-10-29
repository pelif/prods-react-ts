import React, { useState } from 'react';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Categories from './pages/Categories';
import Products from './pages/Products';

import Modal from './components/Modal';
import FormCategory from './components/FormCategory';
import FormProduct from './components/FormProduct';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);
  const [modalContentType, setModalContentType] = React.useState<JSX.Element | null>(null);

  
  const openModal = (type: string): boolean => {
    setIsModalOpen(true);
    setModalContentType(getModalContent(type));
    return true;
  };


  const getModalContent = (type: string|null) => {
    switch (type) {
      case 'category':
        return <FormCategory />;
      case 'product':
        return <FormProduct />;
      default:
        return null;
    }
  }

  const closeModal = (): void => {    
    setIsModalOpen(false);
  }
  
  return (
    <div>
      <Modal 
        isOpen={isModalOpen} 
        closeModal={closeModal} />
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route 
            path="/categories" 
            element={<Categories 
                        openModal={openModal} 
                        closeModal={closeModal}/>} />

          <Route 
            path="/products" 
            element={<Products />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
