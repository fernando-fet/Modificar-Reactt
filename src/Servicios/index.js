import axios from 'axios'

const baseUrl_User= process.env.REACT_APP_BASE_URL 

export async  function getUser() {
    try {
        const response = await axios({
        url:`${baseUrl_User}/api/listarUsuarios`,
        method:'GET'
        }); 

        return response

    } catch (e) {
        console.log(e);
    }
}



export async function modifyProduct(userData) {
    try {
        const response = await axios({
            url: `${baseUrl_User}/api/ModificarUsuarios/${userData.id_user}`,
            method: 'PUT',
            data: userData
        });
        return response
    } catch (e) {
        console.log(e);
    };
}



/*

seleccionarEmpresa=(empresa)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: empresa.id,
        nombre: empresa.nombre,
        pais: empresa.pais,
        capital_bursatil: empresa.capital_bursatil
      }
    })
  }

  peticionPut=()=>{
    axios.put(url+this.state.form.id, this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionGet();
    })
  }


*/

/*
customer.update = async (data) => {
    const urlUpdate = baseUrl+"/update/"+data.id
 
    const res = await axios.put(urlUpdate,data)
    .then(response=>{ return response.data; })
    .catch(error => { return error; })
    return res;
  }
   */

