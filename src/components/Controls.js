import React, { useState } from 'react'
import Consumer from '../configContext'
import { Plant, Garden, GardenPlant } from "../Models";
import { v4 as uuidv4 } from 'uuid';
import Icon from '@material-ui/core/Icon';

  // "earliestIndoorSeed",
  // "earliestOutdoorSeed",
  // "earliestSeedlingDate",
  // "id",
  // "latestIndoorSeed",
  // "latestOutdoorSeed",
  // "latestSeedlingDate",
  // "nutrientNeeds",
  // "recommendedPlantingType",
  // "sunlightNeeds",
  // "timeToHarvest",
  // "waterNeeds"

const plantAttributes = [
  "name",
  "species",
  "description"
]

const gardenAttributes = [
  "name",
  "description",
  "type"
]

export default function Counter({ addButton }) {
  
  const [newGardenData, setNewGardenData] = useState(new Garden(uuidv4(), ""))

  

  // function generateGardenInputs() {
  //   return gardenAttributes.map(att => <input value={newGardenData[att]} name={att} onChange={handleClick} placeholder={att}></input>)
  // }

  // function handleSubmit(callback, data) {
  //   callback(data)
  // }
  
  return (
    <Consumer>
      {context => {
        return (
          <div>
          

          
          
          <button onClick={context.resetData}>Reset Data</button>
          </div>
        )
      }}
      
    </Consumer>
  )
}

//<form name="GardenForm" onSubmit={env => handleSubmit(context.addGarden, newGardenData)}>
  //          {generateGardenInputs()}
    //        <input type="submit" value="Add Garden"/>
      //      <Icon style={{ color: "green" }}>add_circle</Icon>
        //  </form>