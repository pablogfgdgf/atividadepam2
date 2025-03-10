import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { fetchFilmes } from '../service/filmes'; // Importa a função de consulta da API

const CardFilmes = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const getFilmes = async () => {
            const filmesData = await fetchFilmes();
            setFilmes(filmesData);
        };

        getFilmes();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={filmes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                        />
                        <View style={styles.info}>
                            <Text style={styles.textonomefilme}>{item.title}</Text>
                            <Text style={styles.textouf}>{item.release_date}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

export default CardFilmes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flexDirection: 'row',
        width: '90%',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f1f1f1',
        borderBottomWidth: 0.3,
        borderBottomColor: '#018080',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    info: {
        marginLeft: 10,
        flex: 1,
    },
    textonomefilme: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '600',
    },
    textouf: {
        fontSize: 18,
        color: '#0206ff',
        fontWeight: '900',
    },
});