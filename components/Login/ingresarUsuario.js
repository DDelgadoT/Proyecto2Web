import { API_URL } from '../url';

export default function ingresarUsuario(cuerpo){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify(cuerpo)
    };

    try {
        fetch(API_URL + "/User/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            if(typeof data != "string"){
                sessionStorage.setItem('token', data.token);
                window.location.replace("/populares");
            }else{
                alert("Datos incorrectos");
            }
        })
    }catch(e){
        console.log(e);
    }
}