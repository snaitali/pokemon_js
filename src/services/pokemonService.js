import axios from "axios";

const pokemonService = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export default pokemonService;