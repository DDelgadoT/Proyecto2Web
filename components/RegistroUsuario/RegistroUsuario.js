import React from "react"
import { Container, Form, Button } from 'react-bootstrap';
import registrarUsuario from './registrarUsuario';
import { CabeceraLogin } from "../Navbar/Navbar";

import './RegistroUsuario.css';

function handleSubmit(event) {
  event.preventDefault()

  let body = {
      email: event.target.elements.formCorreo.value,
      password: event.target.elements.formContraseña.value,
  }

  registrarUsuario(body);
}

function registroUsuario(){

  return(
    <>
      <CabeceraLogin />
      <View className="App">
        <h1 className="title">Registrando usuario</h1>
      </View>
      <Container fluid border="dark" className="border border-dark View">
        <h4>Ingrese los siguientes datos</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formCorreo">
            <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese el correo electrónico" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContraseña">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese la contraseña" required/>
            </Form.Group>
            <Button variant="primary" type="submit">Registrarse</Button>
            
        </Form>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  View: {
    margintop: '2%',
    paddingtop: '1%',
    paddingbottom: '1%',
    maxwidth: '35%',
  },
  title: {
      margintop: '1%',
  },
})

export default registroUsuario;