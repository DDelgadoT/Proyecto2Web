import React from 'react';
import { Button, StyleSheet } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function Becas(props){
    const fecha = new Date(props.fecha);
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("en-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;
    
    let id = props.id;

    const navigation = useNavigation();

    return(
        <Card mode="outlined" style={styles.container}>
            <Card.Content>
                <Title>{props.nombre}</Title>
                <Paragraph>{props.abstract}</Paragraph>
            </Card.Content>
            <Card.Content>
                <Title>Categoria</Title>
                <Paragraph>{props.categoria}</Paragraph>
            </Card.Content>
            <Card.Content>
                <Title>Porcentaje de financiación</Title>
                <Paragraph>{props.porcentaje}%</Paragraph>
            </Card.Content>
            <Card.Content>
                <Title>Fecha de publicación</Title>
                <Paragraph>{fechaPublicacion}</Paragraph>
            </Card.Content>
            <Card.Content>
                <Title>Pais</Title>
                <Paragraph>{props.pais}</Paragraph>
            </Card.Content>
            <Card.Content>
                <Title>Universidad</Title>
                <Paragraph>{props.universidad}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button title="Detalles" onPress={() => navigation.navigate('Detalles', {
                    itemId: id, 
                })}></Button>
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    container:{
        textAlign: 'center',
        width: '80%',
        alignSelf: 'center',
        marginBottom: 25,
    },
});

export default Becas;