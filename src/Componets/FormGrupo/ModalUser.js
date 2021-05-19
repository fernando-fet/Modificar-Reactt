import React, { useState , useEffect} from "react";
import "bulma/css/bulma.css";

import GroupAddProduct from "./GroupAddProduct";


export default  function ModalUser(User) {
  const [isModal, setIsModal] = useState(false);







    return (
     
     <div className="App">
        <div className={`modal ${isModal}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modificar el Producto</p>
              <button
                onClick={setIsModal}
                className="delete"
                aria-label="close"
              />
            </header>
            <h1>{User.id_rol}</h1>
            <section className="modal-card-body">
              <div className="field">



                
         
          <GroupAddProduct  id_user={User.id}
            usuarios={User.user}
            nombre={User.nom}
            apellido={User.apell}
            telefono={User.telef}
            id_rol={User.id_rol} />
                  
             
       
          

              </div>
            </section>
            <footer className="modal-card-foot">
              <button onClick={setIsModal} className="button">
                Cancel
              </button>


              <button type="submit" onClick={(isModal)} className="button">
                Insertar
              </button>

            </footer>
          </div>
        </div>


        <button onClick={() => setIsModal("is-active")} className="button is-small is-info">
          Modificar
        </button>
      </div>
    );
  }