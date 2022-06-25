import React from "react";
import { Container, Form, Button } from 'react-bootstrap';
import ingresarUsuario from './ingresarUsuario';
import { CabeceraLogin } from "../Navbar/Navbar";
import { StyleSheet, Text } from 'react-native';

function handleSubmit(event) {
    event.preventDefault()
  
    let body = {
        email: event.target.elements.formCorreo.value,
        password: event.target.elements.formContraseña.value,
    }
  
    ingresarUsuario(body);
  }

function Login(){

    return(
        <>
            
            <Container fluid border="dark" style={styles.Container}>
                <Text>Bienvenido a Becas.com</Text>
                <Text>Ingrese los datos para ingresar</Text>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCorreo">
                    <Text>Correo electrónico</Text>
                    <Form.Control type="email" placeholder="Ingrese el correo electrónico" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContraseña">
                    <Text>Contraseña</Text>
                    <Form.Control type="password" placeholder="Ingrese la contraseña" requireds/>
                </Form.Group>
                <Button variant="primary" type="submit">Ingresar</Button>                
            </Form>
            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    Container: {
        margintop: '2%',
        paddingtop: '1%',
        paddingbottom: '1%',
        maxwidth: '35%'
    },
    body:{
        backgroundcolor: '#5286F3',
        fontsize: '14px',
        color: '#fff'
    },
    a:{
        color:'#fff',
    },
})

export default Login;