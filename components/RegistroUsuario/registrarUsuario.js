import { API_URL } from '../url';

export default function registrarUsuario(cuerpo){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify(cuerpo)
    };

    try {
        fetch(API_URL + "/User/register", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        alert("Registro exitoso");
        window.location.replace("/");
    }catch(e){
        console.log(e);
    }
}