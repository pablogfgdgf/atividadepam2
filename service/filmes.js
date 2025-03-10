export const fetchFilmes = async (page = 1) => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzRjNWZkZmUwOThkOGNiMzc0YzIxNTJjZjQ0YzJlNyIsIm5iZiI6MTYyMjgxMjA5NS4zNjIsInN1YiI6IjYwYmEyNWJmZWM4YTQzMDAyOTkwMzkxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4bPOegbKTJSexGWKFgzPmjf6jqNEtLpItk0UJ0Q2VCE'
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log('Dados recebidos da API:', json); // Log dos dados recebidos
        return json.results;
    } catch (err) {
        console.error('Erro ao buscar dados da API:', err); // Log de erro
        return [];
    }
};

export const fetchAllFilmes = async () => {
    let allFilmes = [];
    let currentPage = 1;
    let totalPages = 1;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzRjNWZkZmUwOThkOGNiMzc0YzIxNTJjZjQ0YzJlNyIsIm5iZiI6MTYyMjgxMjA5NS4zNjIsInN1YiI6IjYwYmEyNWJmZWM4YTQzMDAyOTkwMzkxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4bPOegbKTJSexGWKFgzPmjf6jqNEtLpItk0UJ0Q2VCE'
        }
    };

    try {
        while (currentPage <= totalPages) {
            const url = `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=${currentPage}`;
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(`Dados recebidos da API (Página ${currentPage}):`, json); // Log dos dados recebidos
            allFilmes = [...allFilmes, ...json.results];
            totalPages = json.total_pages;
            currentPage++;
        }
        return allFilmes;
    } catch (err) {
        console.error('Erro ao buscar dados da API:', err); // Log de erro
        return [];
    }
};