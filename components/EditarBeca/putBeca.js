import { API_URL } from '../url';

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYxNzM0MjMsImlhdCI6MTY1NjA4NzAyMywiaXNzIjoiRUxBRE1JTiJ9.if3G2PgodP8hxh5cwWN9JdBsUlwdzUT-bpALd1hyqzk";

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