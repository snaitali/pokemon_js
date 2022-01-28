import React from "react";
import { screen, render } from "@testing-library/react";
import { createStore } from "redux";
import AllPokemons from "./AllPokemons";
import reducer from "../../store/reducers/reducer";
import { Provider } from "react-redux";

jest.mock("./AllPokemons", () => ({
    getPokemonData: () => ({ name: "bulbasaur" })
}));

const initialState = {
    pokemon: { name: "bulbasaur" },
};

const store = createStore(reducer, initialState);

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);

describe("AllPokemons", () => {
    it("should display user name", async () => {
        render(<AllPokemons />, { wrapper: Wrapper });

        const pokemonName = await screen.findByText("bulbasaur");

        expect(pokemonName).toBeTruthy();
    });
});