import React, {useEffect} from 'react';
import { connect } from "react-redux";
import * as actions from '../../store/actions/actions';

import {ItemStyled, AppFrameStyled, TitleStyled} from "./style/default";
import Pokemon from "../../components/Pokemon/Pokemon";
import SpinnerComponent from "../../UI/Spinner/Spinner";


const AllPokemonComponent = (props) => {


    useEffect( () => {
        props.getAllPokemons();
    },[]);
    const poks = props.pokemons.map(pokemon => {
        return <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
    });

    let pokemonList = poks;

    if(props.loading) {
        pokemonList = <SpinnerComponent />;
    }


    return (
        <AppFrameStyled>
            <TitleStyled>Welcome to the pokemons world</TitleStyled>
            <ItemStyled>
                {pokemonList}
            </ItemStyled>
        </AppFrameStyled>
    );
};

const mapStateToProps = state => {
    return {
        pokemons: state.pokemons,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllPokemons: () => dispatch( actions.getAllPokemons() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(AllPokemonComponent);
