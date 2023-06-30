import React from "react";
import { View, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function screenB() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('screenC');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: 'https://i.pinimg.com/564x/f7/71/f6/f771f6e8566010180c4b0dcaba30c1b5.jpg' }}
      />
      <Image
        style={styles.img}
        source={{ uri: 'https://i.pinimg.com/564x/39/c6/8f/39c68f637611fd811c2ecee00f3983e5.jpg' }}
      />
      <Image
        style={styles.img}
        source={{ uri: 'https://i.pinimg.com/564x/70/fc/92/70fc92d9e70a875f096aba8da5182dbd.jpg' }}
      />
      <TouchableOpacity style={styles.btn} onPress={openScreen}>ir para tela a
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
  img: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 19
  },
  btn: {
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: "#9B59B6"
  }
});
