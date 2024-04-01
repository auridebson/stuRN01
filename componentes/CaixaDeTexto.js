import React, {useState} from "react";
import { StyleSheet,View,TextInput,Text } from "react-native";

export default function() {
    const [nome, setNome]=useState("Nome")
    const mudarNome=()=>{}

    return(
        <View>
            <TextInput 
                style={styles.caixas}
                value={nome}
                onChangeText={text=>setNome(text)}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textos: {
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