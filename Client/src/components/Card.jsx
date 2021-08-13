import React from "react";
import "./Card.css";
import boton from "./boton.png";

export default function Card({ min, max, name, img, onClose, id }) {

  return (
    <div className="card__conteiner">
      <div className="img__conteiner">
        <img
          className="img"
          src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
          alt="Img"
        />
      </div>

      <div className="derecha__conteiner">
        <div className="text__conteiner">
          <div>
            <h5 className="city__name">{name}</h5>
          </div>
          <div className="data__conteiner">
            <div className="minmax__conteiner">
              <p className="minmax">Mín</p>
              <p className="temp">{min}°</p>
            </div>
            <div className="min-max-conteiner">
              <p className="minmax">Máx</p>
              <p className="temp">{max}°</p>
            </div>
          </div>
        </div>
        <div className="boton__conteiner">
          <button onClick={onClose}>
            <img className="boton" src={boton} alt="boton" />
          </button>
        </div>
      </div>
    </div>
  );
}
