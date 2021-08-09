import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter> {/* Importamos el BrowserRouter y luego envolvemos nuestra app con el para que tenga los conocimientos de router */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);