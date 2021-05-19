import React ,{ useEffect , useState} from 'react'
import {getUser} from '../Servicios/index'
import {   Box, Table ,Container, Columns } from 'react-bulma-components';
import ModalUser from './FormGrupo/ModalUser';
import Loanding from '../ProductLayaudt/Loanding'

export default function Listar ()  {

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

  
    return(

<div>  
  <Container className="center">
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

            <>
          <ModalUser id={item.id_user}
            user={item.usuarios}
            nom={item.nombre}
            apell={item.apellido}
            telef={item.telefono}
            id_rol={item.id_rol}          
          />
          </>
          
          
          </td>
        </tr>
       )
       ) }
      </tbody>
    </Table>
  </Box>  
</Columns>
  </Container>

  
  
 
  
    
  </div>
        



    )
}
