import React, {useState} from 'react';
import {Container, Grid} from "@mui/material";
import PersonList from "../components/PersonList";
import HistoryList from "../components/HistoryList";
import Search from "../components/Search";

const MainPage = () => {
    const [searchWord,setSearchWord] = useState('')
    return (
        <Container>
            <Search searchWord={searchWord} setSearchWord={setSearchWord}/>
            <Grid container spacing={4}>
                <Grid item xs={9}>
                    <PersonList searchWord={searchWord}/>
                </Grid>
                <Grid item xs={3}>
                    <HistoryList/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainPage;