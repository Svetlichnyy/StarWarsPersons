import React, {useEffect, useState} from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {IPerson} from "../@types/personcard";
import HistoryItem from "./HistoryItem";

const HistoryList = () => {
    const [history,setHistory] = useState({})
    useEffect(() => {
        if (sessionStorage.length) {
            setHistory(JSON.parse(sessionStorage.getItem('history') as string))
        }
    },[])
    const historyArr = Object.values(history) as IPerson[]

    return (
        <Container>
            {
                historyArr.length?(
                    <>
                    <Typography variant="h5" color="text.secondary">
                        History
                    </Typography>
                    <Grid container>
                        {
                            historyArr.map((person:IPerson,index:number)=>{
                                return(<HistoryItem {...person} key={index}/>
                                )
                            })
                        }

                    </Grid>
                    </>):
                    <Typography variant="h5" color="text.secondary">
                        Click on persons to fill history!
                    </Typography>
            }

        </Container>
    );
};

export default HistoryList;