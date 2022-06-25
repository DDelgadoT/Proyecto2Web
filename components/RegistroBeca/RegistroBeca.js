import React from "react";
import RegistrarBeca from "../RegistrarBeca/RegistrarBeca";
import Cabecera from '../Navbar/Navbar';
import { StyleSheet, View, Text } from 'react-native';

function RegistroBeca() {

  return (
    <>
      <Cabecera />
      <View>
        <Text style={styles.titulo}>Registro de becas</Text>
      </View>
      <View>
        <RegistrarBeca/>
      </View>
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
})

export default RegistroBeca;
