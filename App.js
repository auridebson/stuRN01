import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CxTx from './componentes/CaixaDeTexto'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textos}>Tela de Login do App</Text>
      <CxTx/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textos: {
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    padding: 10,
    borderRadius: 6
  },
});


