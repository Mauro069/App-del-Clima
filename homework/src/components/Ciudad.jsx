import React from 'react';
import './Ciudad.css'

export default function Ciudad({city}) {
    if(city){
    return (
        <div className='card'>
            <div className='info'>
                    <h2>{city.name}</h2>
                    <div>
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}   else {
    return (
        <div>
            No se encontro ninguna ciudad
        </div>
            )
    }
}