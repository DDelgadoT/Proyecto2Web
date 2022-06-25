import { API_URL } from '../url';

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYxNzM0MjMsImlhdCI6MTY1NjA4NzAyMywiaXNzIjoiRUxBRE1JTiJ9.if3G2PgodP8hxh5cwWN9JdBsUlwdzUT-bpALd1hyqzk";

export default function PostBeca(cuerpo){
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + token
        },
        body: JSON.stringify(cuerpo)
    };

    try {
        fetch(API_URL + "/Beca", requestOptions)
        .then(response => {
            alert("Registro exitoso");
            window.location.replace("/populares")
        });       
    }catch(e){
        console.log(e);
    }
}