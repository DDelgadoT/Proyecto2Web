import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Text, View, Button, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';
import postBeca from './postBeca';


function registrar(data) {

    //event.preventDefault()

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
        porcentajeF: parseInt(data.porcentaje),
        pais: data.pais,
        universidad: data.universidad,
        requisitos: ""
    }

    postBeca(body);
    
}

function RegistrarBeca() {

    const fecha = new Date();
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("es-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;

    const { control, handleSubmit, formState: { errors } } = useForm({});
    const onSubmit = data => registrar(data);

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
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    label="Porcentaje de financiación"
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="numeric"
                    placeholder="Ingrese el número de porcentaje"
                />
            )}
            name="porcentaje"
        />
        {errors.porcentaje && <Text style={styles.italic}>Esto es requerido.</Text>}
        <Controller
            control={control}
            rules={{
                required: true,
                maxLength: 100,
                disabled: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
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
            render={({ field: { onChange, onBlur, value } }) => (
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
        {errors.universidad && <Text style={styles.italic}>Esto es requerido.</Text>}

        <Button title="Registrar beca" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}

const styles = StyleSheet.create({
    italic:{
        fontStyle: 'italic'
    },
    input: {
        
    },
});

export default RegistrarBeca;
