import { useState } from 'react';
import { Container, Grid } from "@mui/material";
import PersonList from "../components/PersonList";
import HistoryList from "../components/HistoryList";
import Search from "../components/Search";
import useDebounce from "../hooks/useDebounce";

const MainPage = () => {
    const [searchWord, setSearchWord] = useState('');
    const debouncedSearchTerm = useDebounce(searchWord, 500);

    return (
        <Container sx={{ mt: 2, mb: 2 }}>
            <Search
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                debouncedSearchTerm={debouncedSearchTerm}
            />
            <Grid container spacing={4}>
                <Grid item xs={9} md={9}>
                    <PersonList
                        setSearchWord={setSearchWord}
                        searchWord={searchWord}
                        debouncedSearchTerm={debouncedSearchTerm}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <HistoryList />
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainPage;