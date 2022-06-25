import React, { useEffect, useState } from 'react';
import obtenerNoticias from './obtenerNoticias';
import Noticias from './Noticias';
import { StyleSheet, View } from 'react-native';

function NoticiasLista(){

    const cantidadNoticias = 7;

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        obtenerNoticias().then(setNoticias);
    }, []);

    let listaNoticicas = noticias.slice(0,cantidadNoticias).map(element => {
        return (<Noticias key={element.title} 
        title={element.title} 
        abstract={element.abstract} 
        url={element.url} 
        src={element.multimedia[0].url} />);
    });

    return(
        <View styles={styles.responsive}>
            {listaNoticicas}
        </View>
    );
}

const styles = StyleSheet.create({
    responsive: {
        margin: 'auto',
        width: '80%',
        backgroundColor: 'white',
    }
})

export default NoticiasLista;