import React from "react";
import { View, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function ScreenC(){
    const navigation = useNavigation();

    const nomes = ['Maria Eduarda ', '18', 'Joana marques', 'bernardo', 'caire',
'jaiza silva']

    
    function openScreen(){
        navigation.navigate('screenA')
    }


    return (
        <view style={{flex: 1, backgroundColor: 'red', justifyItems: 'center' }}>
            <Button
            title="Voltar para tela A"
            onPress={openScreen}
            />
             <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View style={styles.nomeView}>
            <Text style={styles.nomeItem}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
        </view>
    );
}