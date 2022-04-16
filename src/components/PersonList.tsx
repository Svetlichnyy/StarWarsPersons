import React, {useContext, useEffect, useState} from 'react';
import Person from "./Person";
import personContext from "../context/personContext";
import {Grid, Pagination, Typography} from "@mui/material";
import {IPerson} from "../@types/personcard";
import getPersons, {searchByName} from "../axios";

const PersonList = (searchWord:any)=> {
    const [page,setPage] = useState(1)
    const [state,setState] = useState([])
    const [curPersons,setCurPersons] = useState([])
    const persons = useContext(personContext)

    const getPersonsByPage = async () => {
        const response = await getPersons(page)
        setCurPersons(response.data.results)
    }
    useEffect(() => {
        getPersonsByPage();
        setState([])
    },[page])

    useEffect(() =>{
        let isRequestPerformed = false
        const searchPersons =  async () => {
            const searchedPersons = await searchByName(searchWord.searchWord)
            if (!isRequestPerformed && searchWord.searchWord.length) {
                setState(searchedPersons.data.results)
            }
        }
        searchPersons();
        return () => {
            isRequestPerformed = true;
        }
    },[searchWord])

    return (
        <>
        <Grid container spacing={2}>
            <Typography variant={"h4"} style={{minWidth:'800px',marginTop:'20px'}}>
                Here will be searched persons
            </Typography>
            {state.length ?
                (state.map((person: IPerson, index: number) => {
                return (<Person {...person} key={index + ((page - 1) * 10) + 1}/>
                )
            })):
                <Typography variant={"h5"} style={{minWidth:'800px'}}>
                    There is nothing right now =(
                </Typography>
            }
            <Typography variant={"h4"} style={{minWidth:'800px'}}>
                And this is other persons
            </Typography>
            {
                (curPersons.length?curPersons:persons).map((person:IPerson,index:number)=>{
                    return(<Person {...person} key={index+((page-1)*10)+1}/>
                    )
                })
            }
        </Grid>
            <Pagination  count={8} shape="rounded" sx={{justifyContent:'center',display:'flex'}} onChange={(e,selPage) => setPage(selPage)}/>
        </>
    );
};

export default PersonList;