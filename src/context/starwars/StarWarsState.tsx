import { useReducer } from 'react';
import axios from "axios";

import { StarWarsContext } from "./StarWarsContext";
import { StarWarsReducer } from "./StarWarsReducer"
import { GET_PERSONS, GET_PERSON } from "../types";
import {IPerson} from "../../@types/personcard";



export const StarWarsState = ({ children }: any) => {


    const initialState = {
        person: {},
        persons: [],
        history: [],
    }

    const [state, dispatch] = useReducer(StarWarsReducer, initialState);

    const getPersons = (persons:IPerson[]) => {
        dispatch({
            type: GET_PERSONS,
            payload: persons,
        })
    }

    const getOnePerson = (person:IPerson) => {
        dispatch({
            type: GET_PERSON,
            payload: person,
        })
    }

    const { onePerson, persons } = state;

    return (
        <StarWarsContext.Provider value={{ getOnePerson, getPersons, onePerson, persons }}>
            {children}
        </StarWarsContext.Provider>
    )
}


