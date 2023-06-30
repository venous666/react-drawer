import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function ScreenC(){
    const navigation = useNavigation();

    
    function openScreen(){
        navigation.navigate('screenA')
    }


    return (
        <view style={{flex: 1, backgroundColor: 'red', justifyItems: 'center' }}>
            <Button
            title="Voltar para tela A"
            onPress={openScreen}
            />
        </view>
    );
}