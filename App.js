import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CardFilmes from './components/card_filmes'; // Importa o componente CardFilmes

export default function App() {
  return (
    <View style={styles.container}>
      <CardFilmes /> {/* Renderiza o componente CardFilmes */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});