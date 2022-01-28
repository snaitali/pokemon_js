import types from "../types/types";

const initialState = {
    pokemons: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_POKEMONS_START: {
            return {
                ...state,
                loading: true,
                pokemons: [],
            };
        }
        case types.GET_ALL_POKEMONS_FULFILLED: {
            return {
                ...state,
                loading: false,
                pokemons: action.payload,
            };
        }
        case types.GET_ALL_POKEMONS_FAILED: {
            return {
                ...state,
                loading: false,
                pokemons: [],
            };
        }
        default:
            return state;
    }
};

export default reducer;