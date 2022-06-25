import React from 'react';
import { StyleSheet, Button, Linking } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

function Noticias(props){

    return(
        <Card mode='outlined' style={styles.container}>
            <Card.Cover source={{ uri: props.src }} />
            <Card.Content>
                <Title>{props.title}</Title>
                <Paragraph>{props.abstract}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button title="Ir a noticia" onPress={() => Linking.openURL(props.url)}></Button>
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
})

export default Noticias;