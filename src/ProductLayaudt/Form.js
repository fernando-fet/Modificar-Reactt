import React, { useState }  from 'react'
import {modifyProduct} from '../Servicios/index'


export default function Form ({id_user, usuarios, nombre,apellido,telefono,id_rol}) {


  const [userData, setUserData] = useState(
    {
        id_user:id_user,
        usuarios:usuarios,
        nombre:nombre,
        apellido:apellido,
        telefono:telefono,
        id_rol:id_rol
      }
  )

  
  const handleSubmit = async e => {
    e.preventDefault();
    if (userData.id_user === userData.id_user) {
      const res = await modifyProduct(userData);
      console.log(res)
    }
    else {
      const res = await modifyProduct(userData);
      console.log(res)

    }
}

  const handleChange = e => { 
    setUserData({

      ...userData, [e.target.name]: e.target.value
      
    })
  }


    return (
      <div>
        <form onSubmit={handleSubmit}>
        
        <label>ID</label>
          <input 
            className="input is-focused-danger " 
            name="id_user" 
            type="number" 
            placeholder={id_user}
            readOnly
            value={userData.id_user}
            onChange={handleChange}
          />
          <label> Usuario:</label>
          <input 
            className="input is-focused" 
            name="usuarios" type="text" 
            placeholder={usuarios}
            autoFocus="true" 
            onChange={handleChange}
            value={userData.usuarios}
          />


          <label> Nombre:</label>
          <input
            className="input is-focused" 
            name="nombre" 
            type="text" 
            placeholder={nombre}
            value={userData.nombre}

            onChange={handleChange}
          />


          <label> Precio:</label>
          <input 
            className="input is-focused" 
            name="apellido" 
            type="text" 
            
            placeholder={apellido} 
            value={userData.apellido}

            onChange={handleChange}

          />
                    <label> Telefonos:</label>
            <input 
            className="input is-focused" 
            name="telefono" 
            type="number" 
            placeholder={telefono} 
            value={userData.telefono}

            onChange={handleChange}

          />
          <label> Roles:</label>

          <input 
            className="input is-focused" 
            name="id_rol" 
            type="text" 
            placeholder={id_rol} 
            value={userData.id_rol}
            onChange={handleChange}
          />
          <br/>
          <br/>
          <div className="has-text-centered">
          </div>
          <button type="submit" color="primary">
             Save
         </button>
  
        </form>
      </div>
    );
  }
