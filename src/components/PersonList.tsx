import { useContext, useEffect, useState } from 'react';
import { Grid, Pagination, Typography } from "@mui/material";

import Person from "./Person";
import { IPerson, ISearch } from "../@types/personcard";
import getPersonsFromAPI, { searchByName } from "../axios";
import { StarWarsContext } from "../context/starwars/StarWarsContext";

const PersonList = ({ searchWord, debouncedSearchTerm }: ISearch) => {
    const [page, setPage] = useState(1)
    const [state, setState] = useState([])
    const [curPersons, setCurPersons] = useState([])
    const { persons, getPersons }: any = useContext(StarWarsContext);

    const getPersonsByPage = async () => {
        try {
            const response = await getPersonsFromAPI(page)
            setCurPersons(response.data.results)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPersonsByPage();
        getPersons(curPersons)
        setState([])
    }, [page])

    useEffect(() =>{
        let isRequestPerformed = false
        const searchPersons =  async () => {
            try {
                const searchedPersons = await searchByName(searchWord)
                if (!isRequestPerformed && searchWord.length) {
                    setState(searchedPersons.data.results)
                }
            }
            catch(err)
            {
                console.log(err)
            }
        }
        if (debouncedSearchTerm.length > 1){
            searchPersons();
        }

        return () => {
            isRequestPerformed = true;
        }
    },[debouncedSearchTerm])

    return (
        <>
            <Grid container >
                <Typography variant={"h4"} style={{minWidth: '800px' , marginTop: '20px' }}>
                    Here will be searched persons
                </Typography>
                {state.length ?
                    (state.map((person: IPerson, index: number) => {
                        return (<Person {...person} key={index + ((page - 1) * 10) + 1} />
                        )
                    })) :
                    <Typography variant={"h5"} style={{ minWidth: '800px' }}>
                        There is nothing right now =(
                    </Typography>
                }
                <Typography variant={"h4"} style={{ minWidth: '800px' }}>
                    And this is other persons
                </Typography>
                {
                    (curPersons.length ? curPersons : persons).map((person: IPerson, index: number) => {
                        return (
                            <Person {...person} key={index + ((page - 1) * 10) + 1} />
                        )
                    })
                }
            </Grid>

            <Pagination
                count={8}
                shape="rounded"
                sx={{ justifyContent: 'center', display: 'flex' }}
                onChange={(e, selPage) => setPage(selPage)}
            />
        </>
    );
};

export default PersonList;