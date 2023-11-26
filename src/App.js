import logo from './logo.svg';
import Navigation from "./components/Navigation/Navigation";
import SingleCard from './components/SingleCard/SingleCard';
import React from 'react';
import './App.css';
import { Grid } from "@mui/material";

const mockData = [
  {
    id: 1,
    name: 'Home Alone',
    image:
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A9E422A47FEBF6DF9152CF6BC6E488CBA26DD0D12A25BB9EE136986128D4E365/scale?width=1200&aspectRatio=1.78&format=jpeg",
    time: '1hr: 50mins',
  },
  {
    id: 2,
    name: 'Black Adam',
    image:
    "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/black-adam-pic-1666378839.jpg?crop=0.934xw:1.00xh;0.0337xw,0&resize=900:*",
    time: '2hr: 10mins',
  },
  {
    id: 3,
    name: 'Back to the Future',
    image:
    "https://m.media-amazon.com/images/M/MV5BMTk4ZjIxYjItYTkyZC00ZWEwLWI4MTEtNzBiNmNjYTg2NDI2XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
    time: '2hr: 50mins',
  },
  {
    id: 4,
    name: 'Avengers',
    image:
    "https://www.pluggedin.com/wp-content/uploads/2019/12/the-avengers-review-image-1200x688.jpg",
    time: '2hr: 30mins',
  },
];

function App() {

  const handleCardClick = (id) => {
    console.log(`Film id: ${id}`)
  };
  
  return (
    <div className="App">
      <Navigation />
      <Grid container spacing={2} sx={{ padding: "100px" }}>
      {mockData.map(({ id, name, image, time }, index) => (
        <Grid item xs={3} key={index}>
        <SingleCard
        id={id}
        makeClick={handleCardClick}
        name={name} 
        image={image}
        time={time}
      />
      </Grid>
      ))}
      </Grid>
      </div>
  );
}

export default App;