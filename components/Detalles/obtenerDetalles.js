import { API_URL } from '../url' 

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYxNzM0MjMsImlhdCI6MTY1NjA4NzAyMywiaXNzIjoiRUxBRE1JTiJ9.if3G2PgodP8hxh5cwWN9JdBsUlwdzUT-bpALd1hyqzk";

let requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json',
    "Authorization": 'Bearer ' + token
    }
};

export default async function obtenerDetalles(id){
    return await fetch(API_URL + "/Beca/" + id, requestOptions)
    .then(response => response.json())
};