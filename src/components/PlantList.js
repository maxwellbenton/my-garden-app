import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Consumer from '../configContext';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import PlantCard from './PlantCard';
import { Plant, Garden, GardenPlant } from "../Models";

export default function PlantList() {
  const [cellSize, setCellSize] = useState(50)
  const [selectedCellID, setSelectedCellID] = useState(null)

  function listPlants(context) {
    return context.data.plants.map(plant => {
      return <PlantCard key={plant.id} context={context} {...plant}/>
    })  
  }

  function handleAddPlant(context) {
    context.addPlant(new Plant())
  }

  return (
    <Consumer>
      {context => {
        return (
          <div>
            {listPlants(context)}
            <div className="addButton" onClick={() => handleAddPlant(context)}>
              <Icon style={{ color: "green" }}>add_circle</Icon>
              <div>New Plant</div>
            </div>
            <button onClick={context.resetData}>REset</button>
          </div>
        )
      }}
    </Consumer>
  )
}