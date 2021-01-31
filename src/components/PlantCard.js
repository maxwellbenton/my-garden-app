import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import EditModal from './EditModal'

export default function PlantCard({context, id, plantID, gardenID}) {
  let plant = context.data.plants.find(plant => plant.id = plantID)
  return (
    <Card style={{
      minHeight: '80px',
      width: '200px',
      boxShadow: '3px 3px 8px #888888',
      background: 'lightgray'
    }}>
      <CardContent>
      <Typography>
        {!!plant && plant.plantName !== "" ? plant.plantName : "New Plant"}
      </Typography>
      <Typography>
        {!!plant && plant.species !== "" ? plant.species : "New Species"}
      </Typography>
      <EditModal />
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}