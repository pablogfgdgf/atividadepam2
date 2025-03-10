import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, Button } from 'react-native';
import { fetchFilmes } from '../service/filmes'; // Importa a função de consulta da API

const CardFilmes = () => {
    const [filmes, setFilmes] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredFilmes, setFilteredFilmes] = useState([]);
    const [page, setPage] = useState(1);

    const getFilmes = async (page) => {
        const filmesData = await fetchFilmes(page);
        setFilmes(filmesData);
        setFilteredFilmes(filmesData);
    };

    useEffect(() => {
        getFilmes(page);
    }, [page]);

    useEffect(() => {
        setFilteredFilmes(
            filmes.filter(filme =>
                filme.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, filmes]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Buscar filmes..."
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                data={filteredFilmes}
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
                            <Text style={styles.textodescricao}>
                                {item.overview.length > 100 ? `${item.overview.substring(0, 100)}...` : item.overview}
                            </Text> {/* Limita a descrição do filme a 100 caracteres */}
                        </View>
                    </View>
                )}
            />
            <View style={styles.pagination}>
                <Button
                    title="Página Anterior"
                    onPress={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
                    disabled={page === 1}
                />
                <Text style={styles.pageNumber}>Página {page}</Text>
                <Button
                    title="Próxima Página"
                    onPress={() => setPage(prevPage => prevPage + 1)}
                />
            </View>
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
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '90%',
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 70,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    textonomefilme: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textouf: {
        fontSize: 18,
        color: '#0206ff',
        fontWeight: '900',
    },
    textodescricao: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 10,
    },
    pageNumber: {
        fontSize: 16,
    },
});