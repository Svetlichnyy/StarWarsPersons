import React, {useState} from 'react';
import {Container, Grid} from "@mui/material";
import PersonList from "../components/PersonList";
import HistoryList from "../components/HistoryList";
import Search from "../components/Search";
import useDebounce from "../hooks/useDebounce";

const MainPage = () => {

    const [searchWord,setSearchWord] = useState('');
    const debouncedSearchTerm = useDebounce(searchWord, 500);

    return (
        <Container>
            <Search  searchWord={searchWord} setSearchWord={setSearchWord} debouncedSearchTerm={debouncedSearchTerm}/>
            <Grid container spacing={4}>
                <Grid item xs={9}>
                    <PersonList setSearchWord={setSearchWord} searchWord={searchWord} debouncedSearchTerm={debouncedSearchTerm}/>
                </Grid>
                <Grid item xs={3}>
                    <HistoryList/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainPage;