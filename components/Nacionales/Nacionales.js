import React, { useEffect, useState } from 'react';
import { obtenerBecasNacionales } from "../Becas/obtenerBecas";
import Becas from '../Becas/Becas';
import Cabecera from '../Navbar/Navbar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

function Nacionales() {

  const [becas, setBecas] = useState([]);

  useEffect(() => {
    obtenerBecasNacionales().then(setBecas);
  }, []);

  let listaBecas = becas.map(element => {
      return (<Becas key={element.id} 
      nombre={element.nombre} 
      categoria={element.categoria} 
      porcentaje={element.porcentajeF}
      pais={element.pais}
      universidad={element.universidad}
      fecha={element.updated_at}
      id={element.id}
      />);
  });

  return (
    <>  
      <Cabecera />
      <ScrollView style={styles.View}>
        <Text style={styles.titulo}>Becas nacionales</Text>
        <View>
          {listaBecas}
        </View>
      </ScrollView>
    </>
  );

}

const styles = StyleSheet.create({
  View: {
    margintop: '25px',
    backgroundColor: 'black',
  },
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    marginTop: '2%',
    marginBottom: '2%',
    color: 'white',
  },
})

export default Nacionales;
