
import React, { useState, useEffect } from 'react'
import {Columns ,Box , Table } from 'react-bulma-components'
import "bulma/css/bulma.css";
//import AddButton from './AddButton'

import {  getUser } from '../Servicios/index'
import Modall from './Modall';

const ProductLayout = () => {
  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    async function loadUsuarios(){ 
    const datos = await getUser();
    console.log(datos);
    if (datos.status === 200 ){
    setUsuario(datos.data.eventos)
}
}

loadUsuarios();

}, []);



  return (

<div>
    <Columns>
    <Box>
    <Table size="default">
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
          <th>rol</th>
          <th>Modificar</th>
        </tr>
      </thead>
      <tbody>
      { usuario.map((item)=>(
        <tr>
         <th>{item.id_user}</th>
          <td>{item.usuarios}</td>
          <td>{item.nombre}</td>
          <td>{item.apellido}</td>
          <td>{item.telefono}</td>
          <td>{item.roles}</td>
          <td> 
           <Modall id_user={item.id_user}
            usuarios={item.usuarios}
            nombre={item.nombre}
            apellido={item.apellido}
            telefono={item.telefono}
            id_rol={item.id_rol}/>

          </td>
        </tr>
       )
       )
        }

      </tbody>
    </Table>    
  </Box>  
</Columns>


  </div>

  )
}

export default ProductLayout
