import React, {FunctionComponent, useState} from 'react';
import {IconButton, InputBase, Paper} from "@mui/material";
import {searchByName} from "../axios";
import {ISearch} from "../@types/personcard";

const Search = ({searchWord, setSearchWord}:ISearch) => {
    const [word,setWord] = useState('')
    function SearchByName(e:any){
        e.preventDefault();
        if (word.length) {
            setSearchWord(word);
        }
        }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search By Name"
                inputProps={{ 'aria-label': 'Search By Name' }}
                id={'search'}
                onChange={(e) =>{setWord(e.target.value)}}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={(e)=>SearchByName(e)}>
                Search
            </IconButton>
        </Paper>
    );
};

export default Search;