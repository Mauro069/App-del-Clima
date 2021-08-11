import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route } from 'react-router-dom'
import Ciudad from '../components/Ciudad';

export default function App() {

  const [cities, setCities] = useState([]);

  console.log(cities.map(x => x.name === 'Funes'))

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(r => r.json())
  
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId))
      if(Ciudad.length > 0) {
        return ciudad[0]
      } else {
        return null
      }
    }

    return (
      <div className="App">
        <Route
          path='/' /* Se va a mostrar siempre */
          render={() => <Nav onSearch={onSearch} />} /* Si el componente recibe una propiedad, debo usar render y no component */
        />
        <Route
        exact path = '/' /* Solamente se va a mostrar cuando estemos en ese path */
        render = {() => <Cards cities={cities} onClose={onClose} />}
        />
        <Route
        exact path = '/ciudad/:ciudadId' /* Solamente se va a mostrar cuando estemos en ese path */
        render = {({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
        />
      </div>
    );
}

