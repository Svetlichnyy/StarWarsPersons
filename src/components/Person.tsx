import { useNavigate } from "react-router-dom"
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { IPerson } from "../@types/personcard";
import {useContext} from "react";
import {StarWarsContext} from "../context/starwars/StarWarsContext";

const Person = (person: IPerson) => {
    const navigate = useNavigate();
    const personUrl = person.url;
    const personId = personUrl.replace(/[^0-9]/g, '');
    const link = `/about/${personId}`;
    const {getOnePerson}: any = useContext(StarWarsContext);

    function setUpPerson() {
        getOnePerson(person)
        const curSession = JSON.parse(sessionStorage.getItem('history') as string)

        if (curSession) {
            const sessionKeys = Object.keys(curSession);
            for (let item of sessionKeys) {
                if (curSession[item].name === person.name) {
                    delete curSession[item];
                    break;
                }
            }
            if (sessionKeys.length > 3) {
                delete curSession[sessionKeys[sessionKeys.length - 1]]
                sessionStorage.setItem('history', JSON.stringify(curSession))
            }
        }

        sessionStorage.setItem('history', JSON.stringify({ [Date.now()]: person, ...curSession }))
        navigate(link);
    }

    return (
        <Grid item mr={2} mb={2}>
            <Card  variant={"outlined"} onClick={() => setUpPerson()}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i0rSzoBc0YJ0/v1/-1x-1.jpg"
                        alt={person.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {person.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Gender : {person.gender}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Birth year : {person.birth_year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Person;