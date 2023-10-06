import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ScreenA() {
  const navigation = useNavigation();


}
  function openScreenB() {
    navigation.navigate('ScreenB'); 

  function openScreenC() {
    navigation.navigate('ScreenC'); 
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
         <Text>O que precisa?</Text>
      <Button
        title="Cadastrar"
        onPress={openScreenB}
      />
      <Button
        title="Pagamento e lista"
        onPress={openScreenC}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: 200,
    margin: 5,
    padding: 5,
  },
});
