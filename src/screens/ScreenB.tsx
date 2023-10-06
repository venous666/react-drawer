import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

export function screenB() {
  const navigation = useNavigation();

  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [data, setData] = React.useState('');
  const [end, setEnd] = React.useState('');
  const [pagamento, setPagamento] = React.useState('');
  const [ShowInfo,setShowInfo ] = React.useState(false);


  function openScreen() {
    navigation.navigate('screenC');
  }
  function handleLogin(){
    console.log(name)
    console.log(cpf)
    console.log(data)
    console.log(end)

  }

  return (
    <View style={styles.container}>
     <Text>Cadastro</Text>
     <TextInput placeholder='Nome' style={styles.input} value= {name} onChangeText={setName}></TextInput>
     <TextInput placeholder='data' style={styles.input} value= {data} onChangeText={setData}></TextInput>
     <TextInput placeholder='cpf' style={styles.input} value= {cpf} onChangeText={setCpf}></TextInput>
     <TextInput placeholder='endereço' style={styles.input} value= {end} onChangeText={setEnd}></TextInput>
     <TextInput placeholder='pagamento' style={styles.input} value= {pagamento} onChangeText={setPagamento}></TextInput>
     <TouchableOpacity style={styles.button}>
        <Text style={styles.textoButton} onPress={() =>{handleLogin(); setShowInfo(true)}}>Cadastrar</Text>
      </TouchableOpacity>
     </View>
     
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F574D7',
    alignItems: 'center',
  },
  infos:{
    marginTop: 20,
    alignItems: 'center',
    color:'black',
    display:'flex',
    textAlign:'left'
  },
  text:{
    fontSize: 16,
    marginBottom: 5,
  },
  input:{
    width:200,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#9c9c9c',
    borderRadius:3,
    marginBottom:5,
  },
  button:{
    width:200,
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'#4285f4',
    marginTop:15,
    borderWidth:2,
    borderColor:'#8ecafc'

  },
  textoButton:{
    fontSize:16,
    fontWeight:'bold',
    color:'#FFF'
  },
});
