import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";
import putBeca from './putBeca';
import obtenerDetalles from '../Detalles/obtenerDetalles';
import { useNavigation } from '@react-navigation/native';


function actualizar(data, id) {

    /*let arrayRequisitos = event.target.elements.formRequisitos.value.split(".");
    arrayRequisitos.pop();

    let requisitos = []
    
    arrayRequisitos.forEach(element => {
        let requisitoTemporal = {}
        if(element.charAt(0) === " "){
            element = element.slice(1);
        }
        requisitoTemporal["descripcion"] = element;
        requisitos.push(requisitoTemporal);
    })*/

    let body = {
        nombre: data.nombre,
        categoria: data.categoria,
        porcentajeF: parseInt(data.porcentajeF),
        pais: data.pais,
        universidad: data.universidad,
    }

    putBeca(body, id);
    
}

function EditarBeca({ route, navigation }) {

    const id = route.params.itemId;
    const navigate = useNavigation();

    const [detalles, setDetalles] = useState({});

    useEffect(() => {
        obtenerDetalles(id).then(setDetalles);
    }, {});

    const fecha = new Date();
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("es-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;

    let requisitos = [];
    if (detalles.requisitos !== undefined){
        detalles.requisitos.forEach(element => {
            requisitos.push(element.descripcion)
        });
    }
    requisitos = requisitos.join(". ");

    const { control, handleSubmit, formState: { errors }, reset } = useForm({});
    const onSubmit = data => actualizar(data, id);

    useEffect(() => {
        reset(detalles);
    }, [detalles]);

    return (

        <View>
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, value } }) => (
                <TextInput
                    label="Nombre"
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Ingrese el nombre de la beca"
                />
            )}
            name="nombre"
        />
        {errors.nombre && <Text style={styles.italic}>Esto es requerido.</Text>}
        <Controller
            control={control}
            rules={{
                required: true,
                maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    label="Categoria (Nacional o Internacional)"
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Ingrese la categoria"
                />
            )}
            name="categoria"
        />
        {errors.categoria && <Text style={styles.italic}>Esto es requerido.</Text>}
        <Controller
            control={control}
            rules={{
                required: true,
                maxLength: 100,
            }}
            render={({ field: { onChange, value } }) => (
                <TextInput
                    label="Porcentaje de financiación"
                    style={styles.input}
                    onChangeText={onChange}
                    value={String(value)}
                    keyboardType="numeric"
                    placeholder="Ingrese el número de porcentaje"
                />
            )}
            name="porcentajeF"
        />
        {errors.porcentaje && <Text style={styles.italic}>Esto es requerido.</Text>}
        <Controller
            control={control}
            rules={{
                required: true,
                maxLength: 100,
            }}
            render={({ field: { onChange, value } }) => (
                <TextInput
                    label="Pais que ofrece la beca"
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Ingrese el nombre del país"
                />
            )}
            name="pais"
        />
        {errors.pais && <Text style={styles.italic}>Esto es requerido.</Text>}
        <Controller
            control={control}
            rules={{
                required: true,
                maxLength: 100,
            }}
            render={({ field: { onChange, value } }) => (
                <TextInput
                    label="Universidad que ofrece la beca"
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Ingrese el nombre de la universidad"
                />
            )}
            name="universidad"
        />

        <Button icon="update" style={styles.botonActualizar} mode="contained" onPress={handleSubmit(onSubmit)}>Actualizar beca</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    botonActualizar: {
        backgroundColor: "blue",
        textColor: 'white',
    }
})

export default EditarBeca;
