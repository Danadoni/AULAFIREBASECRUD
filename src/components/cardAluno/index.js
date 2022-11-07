import React from 'react';
import {Image,View,TouchableOpacity,StyleSheet,Text} from 'react-native'



export default function CardAlunos(){

    return (

        <TouchableOpacity style={estilo.Container}>

            <Image style = {estilo.Imagem} source = {{ uri: "https://thumbs.dreamstime.com/b/placa-vestindo-de-sorriso-bonito-e-mon%C3%B3culos-do-almofariz-do-emoticon-emoji-smiley-vector-ilustra%C3%A7%C3%A3o-96990729.jpg"}}></Image>
            <Text>Teste</Text>

        </TouchableOpacity>

    );


}

const estilo =  StyleSheet.create({

    Container:{
        margin:10,
        width: 150,
        height:150,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#ffff"
    }
    ,
    Imagem :{

       width:120,
       height:120

    }





})