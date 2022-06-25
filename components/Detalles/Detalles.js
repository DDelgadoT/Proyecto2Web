import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import obtenerDetalles from './obtenerDetalles';
import { API_URL } from '../url'
import { useNavigation } from '@react-navigation/native';

function eliminar(id, navigate){

    Alert.alert(
        "Eliminando beca",
        "¿Está seguro de que quiere eliminar la beca?",
        [
            {
                text: "No",
                style: "cancel"
            },
            { text: "Sí", onPress: () => {
                let requestOptions = {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json',
                        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYxNzM0MjMsImlhdCI6MTY1NjA4NzAyMywiaXNzIjoiRUxBRE1JTiJ9.if3G2PgodP8hxh5cwWN9JdBsUlwdzUT-bpALd1hyqzk',
                    }
                };
        
                fetch(API_URL + "/Beca/" + id, requestOptions)
                .then(response => {response.json();}
                )

                navigate.navigate("Populares");
            }}
        ]
    );
}

function Detalles({ route, navigation }){

    const id = route.params.itemId;
    const navigate = useNavigation();

    const [detalles, setDetalles] = useState([]);

    useEffect(() => {
        obtenerDetalles(id).then(setDetalles)
    }, []);

    const fecha = new Date(detalles.updated_at);
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("en-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;

    let requisitosLista = [];

    if (detalles.requisitos !== undefined){
        detalles.requisitos.forEach(element => {
            requisitosLista.push(<Text>{element.descripcion + ". "}</Text>)})
    }else{
        requisitosLista.push("No hay requisitos");
    }

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.titulo}>Detalles</Text>
            </View>
            <Card mode="outlined" style={styles.container}>
                <Card.Content>
                    <Title>{detalles.nombre}</Title>
                    <Paragraph>{detalles.abstract}</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Categoria</Title>
                    <Paragraph>{detalles.categoria}</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Porcentaje de financiación</Title>
                    <Paragraph>{detalles.porcentajeF}%</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Fecha de publicación</Title>
                    <Paragraph>{fechaPublicacion}</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Pais</Title>
                    <Paragraph>{detalles.pais}</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Universidad</Title>
                    <Paragraph>{detalles.universidad}</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Requisitos</Title>
                    <Paragraph>{requisitosLista}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button icon="update" style={styles.botonActualizar} mode="contained" onPress={() => navigate.navigate("Editar", {itemId: id})}>Actualizar</Button>
                    <Button icon="delete" style={styles.botonEliminar} mode="contained" onPress={() => eliminar(id, navigate)}>Eliminar</Button>
                </Card.Actions>
            </Card>
        </>
    );
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: '2%',
        marginBottom: '2%',
    },
    container:{
        textAlign: 'center',
        width: '80%',
        alignSelf: 'center',
        marginBottom: 25,
    },
    botonEliminar: {
        backgroundColor: "#fa0000",
        textColor: 'white',
    },
    botonActualizar: {
        backgroundColor: "blue",
        textColor: 'white',
    }
})

export default Detalles;