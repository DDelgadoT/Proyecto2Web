import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { obtenerBecas } from './obtenerBecas';
import Becas from './Becas';
import { View } from 'react-native';

function BecasPopulares(){

    const [becas, setBecas] = useState([]);

    useEffect(() => {
        obtenerBecas().then(setBecas);
    }, []);

    let listaBecas = becas.slice(0,6).map(element => {
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

    return(
        <View>
            {listaBecas}
        </View>
    );
}

export default BecasPopulares;