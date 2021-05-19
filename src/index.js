import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Global.scss'

//import './index.css';
import App from './App';

import 'bulma/css/bulma.min.css';


import Listar from './Componets/Listar';
//import ModalUser from './Componets/FormGrupo/ModalUser';
//import Actualizar from './CompoAct/Actualizar';
import ProductLayout from './ProductLayaudt/ProductLayout';

ReactDOM.render(
  <>
    <React.StrictMode>
    <BrowserRouter>
         <App />
    </BrowserRouter>
  </React.StrictMode>
  ,
</>
,document.getElementById('root')
);
//  <Listar />  <ProductLayout />




