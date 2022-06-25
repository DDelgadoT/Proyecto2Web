import React from "react";
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

/*export function CabeceraLogin(){

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Becas.com</Navbar.Brand>
                <Nav className="me-auto">
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/">Ingresar</Nav.Link>
                        <Nav.Link href="/registrarse">Registrarse</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    );
}*/

function Cabecera(){

    const navigation = useNavigation();

    return(
        <Appbar style={styles.top}>
            <Appbar.Action icon="star" title="Popular" onPress={() => navigation.reset({
                index: 0,
                routes: [{
                    name: 'Populares',
                },],
            })} />
            <Appbar.Action icon="tag" onPress={() => navigation.reset({
                index: 0,
                routes: [{
                    name: 'Nacionales',
                },],
            })} />
            <Appbar.Action icon="earth" onPress={() => navigation.reset({
                index: 0,
                routes: [{
                    name: 'Internacionales',
                },],
            })} />
            <Appbar.Action icon="cash-register" onPress={() => navigation.reset({
                index: 0,
                routes: [{
                    name: 'RegistroBeca',
                },],
            })} />
        </Appbar>
    );
}

const styles = StyleSheet.create({
    top: {
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'blue',
    },
})

export default Cabecera;

/*
<Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/populares">Becas.com</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/populares">Becas populares</Nav.Link>
                    <Nav.Link href="/internacionales">Becas internacionales</Nav.Link>
                    <Nav.Link href="/nacionales">Becas nacionales</Nav.Link>
                    <Nav.Link href="/registroBeca">Registrar beca</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button onClick={cerrarSesion}>Cerrar sesión</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        */