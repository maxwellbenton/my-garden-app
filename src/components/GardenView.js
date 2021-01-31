import React, {useState} from 'react';
import Consumer from '../configContext';
import { Plant, Garden, GardenPlant } from "../Models";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import GardenPlantCard from './GardenPlantCard'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '80vw',
    margin: 'auto',
    marginTop: '10px',
    boxShadow: '3px 3px 8px #888888',
    background: 'lightgray'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  input: {
    color: 'inherit',
    background: 'inherit',
    font: 'inherit'
  }
});



function GardenCard({context, garden}) {
  const [newPlantData, setNewPlantData] = useState({})
  const [currentGardenData, setCurrentGardenData] = useState({})

  const classes = useStyles();

  

  function handleRemoveGarden() {
    context.removeGarden(garden.id)
  }

  function handleAddPlantToGarden(context) {
    let plant = new Plant(uuidv4(), "New Plant")
    let gardenPlant = new GardenPlant(uuidv4(), "New Garden Plant", plant.id, garden.id)
    context.addPlantToGarden(plant, garden, gardenPlant)
  }

  function listGardenPlants(context, garden) {
    return context.data.gardenPlants
      .filter(gardenPlant => gardenPlant.gardenID === garden.id)
      .map(gardenPlant => <GardenPlantCard key={gardenPlant.id} context={context} {...gardenPlant} />)
    
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {garden.gardenName}
        </Typography>
        <Typography className={classes.title} variant="body2" color="textSecondary" gutterBottom>
          <input className={classes.input} val={garden.description} placeholder="Enter description"></input>
        </Typography>
        <Typography className={classes.pos} variant="body2" color="textSecondary">
          <input className={classes.input} val={garden.type} placeholder="Enter type"></input>
        </Typography>
        <div className="plantCardContainer">
          {listGardenPlants(context, garden)}
        </div>
        <div className="addButton" onClick={() => handleAddPlantToGarden(context)}>
          <Icon style={{ color: "green" }}>add_circle</Icon>
          <div>Add Plant</div>
        </div>
      </CardContent>
      <CardActions>
        
        
        
      </CardActions>
      {garden.id}
      <button onClick={handleRemoveGarden}>X</button>
    </Card>
  )
}

export default function GardenView() {

  function listGardens(context) {
    
    return context.data.gardens.map(garden => {
      return <GardenCard key={garden.id} context={context} garden={garden}/>
    })  
    
  }

  function handleAddGarden(context) {
    context.addGarden(new Garden(uuidv4(), "New Garden"))
  }

  return (
    <Consumer>
      {context => {
        return (
          <div>
            {listGardens(context)}
            <div className="addButton" onClick={() => handleAddGarden(context)}>
              <Icon style={{ color: "green" }}>add_circle</Icon>
              <div>New Garden</div>
            </div>
          </div>
        )
      }}
    </Consumer>
  )
}