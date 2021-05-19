import React, { useState , useEffect } from "react";
import "bulma/css/bulma.css";
import {modifyProduct } from '../Servicios'

//import GroupAddProduct from "./GroupAddProduct";


export default  function Modal({id_user, usuarios, nombre,apellido,telefono,id_rol}) {
  
const [isModal , setIsModal] = useState(false);

const [userData , setUserData] = useState(
{
  id_user:id_user,
  usuarios:usuarios,
  nombre :nombre,
  apellido:apellido,
  telefono :telefono,
  id_rol :id_rol
}
)


const handleSubmit = async e =>{
e.preventDefault();
if(userData.id_user === 200){
const res = await modifyProduct(userData)
console.log(res)
}
else {
  const res = await modifyProduct(userData);
  console.log(res)

}

}



const handleChange  = e =>{
setUserData({

  ...userData, [e.target.name]: e.target.value

})

}


    return (
     
     <div className="App">
        <div className={`modal ${isModal}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modificar el Producto</p>
              <button onClick={setIsModal} className="delete" aria-label="close" />
            </header>
            

            <form onSubmit={handleSubmit}>


            <section className="modal-card-body">

         <label>ID</label>
        
          <input 
            className="input is-focused-danger " 
            name="id_user" 
            type="number" 
            placeholder={id_user}
            value={userData.id_user}
            onChange={handleChange}
            readOnly
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
    


            </section>
            <footer className="modal-card-foot">
              <button onClick={isModal} className="button">
                Cancel
              </button>
              <button type="submit" onClick={setIsModal}  className="button">
                Insertar
              </button>



            </footer>
            </form>

 
          </div>
        </div>


        <button onClick={() => setIsModal("is-active")} className="button is-small is-info">
          Modificar
        </button>
      </div>
    );
  }