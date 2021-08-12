import React, { useEffect, useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');

  return (
    <form className='form-conteiner' onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input className = 'elinput'
        type="text"
        placeholder="Clima en..."
        value = {city}
        onChange = {e => setCity(e.target.value)}
      />
      <input className = 'elboton' type="submit" value="Agregar" />
    </form>
  ); 
}