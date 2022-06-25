import { API_URL } from '../url';

let token = sessionStorage.getItem('token');

export default function putBeca(cuerpo, id){
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + token
        },
        body: JSON.stringify(cuerpo)
    };

    try {
        fetch(API_URL + "/Beca/" + id, requestOptions)
        .then(response => response.json())
        .then(data => {
            alert("Actualización exitoso");
            window.location.replace("/populares");
        })
    }catch(e){
        console.log(e);
    }
}