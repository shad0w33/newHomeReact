import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, } from '@mui/material';

export default function SingleCard({
  id,
  name,
  time,
  image,
  makeClick,   
}) {
  return (
    <Card sx={{ maxWidth: 395 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="222px"
          image={image}
          alt="image"
        />
        <Card className='Information'
          sx={{
            background: `linear-gradient(
              90deg, rgba(0, 0, 0, 0.80) 0%,
              rgba(20, 20, 20, 0.40) 50%,
              rgba(83, 100, 141, 0.00) 100%)`,
            width: '395px',
            height: '222px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
            }}
        >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {time}
          </Typography>
          <Button size="small"
        onClick={() => makeClick(id)}
        sx= {{
            border: "1px solid #E50914",
            background: "#E50914",
            width: "100px",
            height: "30px",
            color: "#fff",
            marginTop: "10px",
        }}
        >
          Show more
        </Button>
        </CardContent>
        </Card>
      </CardActionArea>
    </Card>
  );
}