import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import putBeca from './putBeca';
import obtenerDetalles from '../Detalles/obtenerDetalles';
import Cabecera from '../Navbar/Navbar';

let id = window.location.href;
id = id.replace("http://localhost:3000/editar/",'');

function handleSubmit(event) {
    event.preventDefault()

    let arrayRequisitos = event.target.elements.formRequisitos.value.split(".");
    arrayRequisitos.pop();

    let requisitos = []
    
    arrayRequisitos.forEach(element => {
        let requisitoTemporal = {}
        if(element.charAt(0) === " "){
            element = element.slice(1);
        }
        requisitoTemporal["descripcion"] = element;
        requisitos.push(requisitoTemporal);
    })

    let body = {
        nombre: event.target.elements.formNombreBeca.value,
        categoria: event.target.elements.formCategoria.value,
        porcentajeF: parseInt(event.target.elements.formPorcentaje.value),
        pais: event.target.elements.formPais.value,
        universidad: event.target.elements.formUniversidad.value,
        requisitos: requisitos
    }

    putBeca(body, id);
    
}

function EditarBeca() {

    const [detalles, setDetalles] = useState({});

    useEffect(() => {
        obtenerDetalles(id).then(setDetalles)
    }, {});

    if(sessionStorage.getItem("token") != null){

        const fecha = new Date();
        let año = fecha.getFullYear();
        let mes = fecha.toLocaleString("es-US", {month: "long"});
        let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
        let fechaPublicacion = dia + "/" + mes + "/" + año;

        let valueSelect;
        if(detalles.categoria === "Nacional"){
            valueSelect = "Nacional";
        }else{
            valueSelect = "Internacional";
        }

        console.log(valueSelect);

        let requisitos = [];
        if (detalles.requisitos !== undefined){
            detalles.requisitos.forEach(element => {
                requisitos.push(element.descripcion)
            });
        }
        requisitos = requisitos.join(". ");

        return (
            <>
            <Cabecera />
                <div className="App">
                    <h1 className="title">Edición de beca</h1>
                </div>
                <Container fluid border="dark" className="border border-dark div">      
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formFecha">
                            <Form.Label>Fecha de actualización</Form.Label>
                            <Form.Control type="text" placeholder={fechaPublicacion} readOnly /> 
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNombreBeca">
                            <Form.Label>Nombre de la beca</Form.Label>
                            <Form.Control type="text" defaultValue={detalles.nombre} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCategoria">
                            <Form.Label>Categoría:</Form.Label>
                            <Form.Select aria-label="Default select example" value={valueSelect}>
                                <option value="Nacional">Nacional</option>
                                <option value="Internacional">Internacional</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPorcentaje">
                            <Form.Label>Porcentaje de financiación:</Form.Label>
                            <Form.Control type="number" min="0" max="100" defaultValue={detalles.porcentajeF} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPais">
                            <Form.Label>Pais que ofrece la beca:</Form.Label>
                            <Form.Control type="text" defaultValue={detalles.pais} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUniversidad">
                            <Form.Label>Universidad que ofrece la beca:</Form.Label>
                            <Form.Control type="text" defaultValue={detalles.universidad} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRequisitos">
                            <Form.Label>Requisitos: <b>(Separe los requisitos por puntos)</b></Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue={requisitos}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Actualizar</Button>
                    </Form>
                </Container>
            </>
        );
    }else{
        alert("Debes ingresar");
        window.location.replace("/");
    }
}

export default EditarBeca;
