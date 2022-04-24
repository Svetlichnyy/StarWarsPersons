import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import { IPerson } from "../@types/personcard";
import { useNavigate } from "react-router-dom"
import {useContext} from "react";
import {StarWarsContext} from "../context/starwars/StarWarsContext";

const HistoryItem = (person: IPerson) => {
  const navigate = useNavigate();
  const personUrl = person.url;
  const personId = personUrl.replace(/[^0-9]/g, '');
  const link = "/about/" + personId;
  const {getOnePerson}: any = useContext(StarWarsContext);

  return (
    <Card
      sx={{ maxWidth: 150, marginBottom: 2 }}
      variant={"outlined"}
      onClick={() => {
        getOnePerson(person)
        navigate(link)
      }}

    >
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
  );
};

export default HistoryItem;