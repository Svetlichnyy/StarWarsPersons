import {useContext, useEffect, useState} from 'react';
import { Card, CardContent, CardMedia, Container, Paper, Typography } from "@mui/material";

import { getOnePerson } from "../axios";
import { IPerson } from "../@types/personcard";
import { useParams } from 'react-router-dom';
import {StarWarsContext} from "../context/starwars/StarWarsContext";


const PersonPage = () => {
    const {onePerson}:any = useContext(StarWarsContext);
    const [pers, setPers] = useState({} as IPerson)

    let { id: persId } = useParams();

    useEffect(() => {
        let isRequestPerformed = false;
        if(onePerson === undefined) {

        const fetchPers = async () => {

                try {
                    const curPers = await getOnePerson(Number(persId))
                    if (!isRequestPerformed) {
                        setPers(curPers.data)
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        fetchPers();
    } else {
            setPers(onePerson)
        }
    },[])
    return (
        <Container sx={{ mt: 2, mb: 2 }}>
            <Card sx={{ maxWidth: 1200, maxHeight: 1200 }} variant={"outlined"}>
                <Paper>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i0rSzoBc0YJ0/v1/-1x-1.jpg"
                        alt={pers.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pers.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Gender : {pers.gender}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Birth year : {pers.birth_year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Height : {pers.height}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Mass : {pers.mass}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Hair Color : {pers.hair_color}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Skin color : {pers.skin_color}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Eye color : {pers.eye_color}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Homeworld : {pers.homeworld}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Species : {pers.species?.length ? pers.species.map((item) => ` ` + item) : "No species was found"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Vehicles : {pers.vehicles?.length ? pers.vehicles.map((item) => " " + item) : "No vehicles was found"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Starships : {pers.starships?.length ? pers.starships.map((item) => " " + item) : "No starships was found"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Films : {pers.films?.length ? pers.films.map((item) => ` ` + item) : "No films was found"}
                        </Typography>
                    </CardContent>
                </Paper>
            </Card>
        </Container>
    );
};

export default PersonPage;