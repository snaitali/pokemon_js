import { put } from 'redux-saga/effects';

import pokemonService from "../../services/pokemonService";
import * as actions from "../actions/actions";

export function* getAllPokemonsSaga(action) {
        yield put(actions.getAllPokemonsStart());
        try {
            const response = yield pokemonService.get( '/pokemon' );
            yield put(actions.getAllPokemonsFulfilled(response.data.results))
        } catch (error) {
            yield put(actions.getAllPokemonsFailed(error));
        }
}