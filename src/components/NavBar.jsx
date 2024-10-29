import React from 'react';

import { NavLink } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Categories from '../pages/Categories';
import Products from '../pages/Products';

const NavBarDom = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink 
                    className="navbar-brand fs-5 fw-bold bg-dark-subtle p-3 text-dark" 
                    href="#">Products Entry</NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav"   
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-4">
                            <NavLink  
                                to="/categories" 
                                className="nav-link" 
                                element={<Categories />}>
                            <i className="bi bi-bar-chart-steps me-1"></i>Categorias
                            </NavLink>
                        </li>
                        <li className="nav-item ms-4">
                            <NavLink 
                                to="/products"  
                                className="nav-link" 
                                element={<Products />}>
                            <i className="bi bi-boxes me-1"></i>Produtos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const NavBar = () => {

    let context = true;

    return (
        <MyContext.Provider value={context}>
            <NavBarDom />
        </MyContext.Provider>        
    )
}

export default NavBar; 