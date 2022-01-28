import types from "../types/types";

export const getAllPokemonsStart = () => {
    return {
        type: types.GET_ALL_POKEMONS_START
    };
};

export const getAllPokemonsFulfilled = ( pokemons ) => {
    return {
        type: types.GET_ALL_POKEMONS_FULFILLED,
        payload: pokemons
    };
};

export const getAllPokemonsFailed = ( error ) => {
    return {
        type: types.GET_ALL_POKEMONS_FAILED,
        payload: error
    };
};

export const getAllPokemons = () => {
    return {
        type: types.GET_ALL_POKEMONS,
    };
};