import React from "react";
import Cabecera from '../Navbar/Navbar';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import NoticiasLista from '../Noticias/NoticiasLista';
import BecasPopulares from '../Becas/BecasPopulares';

function Populares(){

    return(
        <> 
        <ScrollView style={styles.fondo}>
            <Cabecera />
            <View >
                <Text style={styles.titulo}>Becas más populares</Text>
                <BecasPopulares />
            </View>
            <View style={styles.ViewNoticias}>
                <Text style={styles.titleNews}>Noticias recientes relacionadas a tecnología</Text>
                <NoticiasLista />
            </View>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: 'black',
    },
    ViewNoticias: {
      backgroundColor: 'gray',
    },
    titleNews: {
      marginBottom: '2%',
      marginTop: '2%',
      color: 'black',
      textAlign: 'center',
      fontSize: 30,
    },
    titulo:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: '2%',
        marginBottom: '2%',
        color: 'white',
    },
})

export default Populares;