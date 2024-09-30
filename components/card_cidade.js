import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const card_Cidade = (nome, uf) => { 
    return(
        <View style={styles.card}>
                <Text style={styles.textonomedacidade}>{nome}</Text> - <Text style={styles.textouf}>{uf}</Text>
        </View>
    );
}

export default card_Cidade;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card:{
        width: '100%',
        padding: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textonomedacidade:{
        color: 'red',
        fontSize: 18,
        fontWeight: '600'
    },
    textouf:{
        color: 'blue',
        fontSize: 18,
        fontWeight:'900'
    },
});