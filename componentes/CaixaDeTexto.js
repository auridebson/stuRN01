import React from "react";
import { StyleSheet,View,TextInput,Text, Button } from "react-native";

export default function() {
    return(
        <View>
            <Text style={styles.textos}>Login:</Text>
            <TextInput style={styles.caixas}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textos: {
        backgroundColor: '#cc3',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        borderRadius: 6,
        margin: 10,
        padding: 10
      },
      caixas: {
        backgroundColor: '#fff',
        fontSize: 24,
        borderRadius: 6,
        borderWidth:1,
        padding: 10,
        width: 200,
        shadowColor: 'black'
      },
  });