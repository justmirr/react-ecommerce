import React from 'react';
import Navbarr from '../header/Navbarr';
import './searchbar.css';

const SearchBar = ({ handleSearch, products }) => {
    const handleChange = (e) => {
      const searchQuery = e.target.value;
      handleSearch(searchQuery);
    };
  
    return (
      <div className="dropdown">
        <InputBox onChange={handleChange} />
        <div className="dropdown-content">
          {products.map((product, index) => (
            <div className="product-item" key={index}>
              {product.name}
            </div>
          ))}
        </div>
      </div>
    );
};
  
export default Searchbar