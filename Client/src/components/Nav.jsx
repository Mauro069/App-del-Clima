import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <div className='navbar__conteiner'>
    <nav className='navbar'>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
    </div>
  );
};

export default Nav;
