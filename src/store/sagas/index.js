import { takeEvery } from 'redux-saga/effects';
import types from "../types/types";
import { getAllPokemonsSaga } from "./saga";

export function* watchGetPokemons() {
    yield takeEvery(types.GET_ALL_POKEMONS, getAllPokemonsSaga);
};