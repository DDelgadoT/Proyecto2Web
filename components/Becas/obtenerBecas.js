import { API_URL } from '../url' 

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYxNzM0MjMsImlhdCI6MTY1NjA4NzAyMywiaXNzIjoiRUxBRE1JTiJ9.if3G2PgodP8hxh5cwWN9JdBsUlwdzUT-bpALd1hyqzk";

let requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + token
    }
};

export async function obtenerBecas(){
    return await fetch(API_URL + "/Beca/all", requestOptions)
    .then(response => response.json())
    .then(data => data)
};

export async function obtenerBecasNacionales(){
    return await fetch(API_URL + "/Beca/categoria/Nacional", requestOptions)
    .then(response => response.json())
    .then(data => data)
};

export async function obtenerBecasInternacionales(){
    return await fetch(API_URL + "/Beca/categoria/Internacional", requestOptions)
    .then(response => response.json())
    .then(data => data)
};