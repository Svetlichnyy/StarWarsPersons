import React,{useReducer} from 'react';
import axios from "axios";

import {StarWarsContext} from "./StarWarsContext";
import {StarWarsReducer} from "./StarWarsReducer"
import {SET_HISTORY,GET_PERSONS,GET_PERSON} from "../types";



export const StarWarsState = ({children}:any)=> {


    const initialState = {
        person:{},
        persons:[],
        history:[],
    }

    const [state,dispatch] = useReducer(StarWarsReducer,initialState);

    const getPersons = async (page?:number) => {
        let url;
        page ? (url = 'https://swapi.dev/api/people/?page=' + page) : (url = 'https://swapi.dev/api/people')
        const res = await axios.get(url)

        dispatch({
            type:GET_PERSONS,
            payload: res.data.results,
        })
    }

    const getOnePerson = async (id:number) => {
        const res = await axios.get("https://swapi.dev/api/people/"+id+"/")
        console.log(res)
        dispatch({
            type:GET_PERSON,
            payload:res.data,
        })
    }

    const {person,persons} = state;

    return(
        <StarWarsContext.Provider value={{getOnePerson,getPersons,person,persons}}>
            {children}
        </StarWarsContext.Provider>
    )
}


