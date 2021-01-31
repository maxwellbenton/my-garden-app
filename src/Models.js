import { v4 as uuidv4 } from 'uuid';

function Plant(
  id = "",
  plantName = "",
  plantGroup = "", 
  species = "", 
  description = "",
  recommendedPlantingType = "",
  earliestIndoorSeed = "",
  latestIndoorSeed = "",
  earliestOutdoorSeed = "",
  latestOutdoorSeed = "",
  earliestSeedlingDate = "",
  latestSeedlingDate = "",
  timeToHarvest = 0,
  waterNeeds = "",
  sunlightNeeds = "",
  nutrientNeeds = ""
) {
  this.id = id
  this.plantName = plantName
  this.plantGroup = plantGroup
  this.species = species
  this.description = description
  this.recommendedPlantingType = recommendedPlantingType
  this.earliestIndoorSeed = earliestIndoorSeed
  this.latestIndoorSeed = latestIndoorSeed
  this.earliestOutdoorSeed = earliestOutdoorSeed
  this.latestOutdoorSeed = latestOutdoorSeed
  this.earliestSeedlingDate = earliestSeedlingDate
  this.latestSeedlingDate = latestSeedlingDate
  this.timeToHarvest = timeToHarvest 
  this.waterNeeds = waterNeeds
  this.sunlightNeeds = sunlightNeeds
  this.nutrientNeeds = nutrientNeeds
}

function Garden(id = "", gardenName = "", description = "", type = "", plants = []) {
  this.id = id
  this.gardenName = gardenName
  this.description = description
  this.type = type
}

function GardenPlant(
  id = "",
  gardenPlantName = "",
  plantID = "",
  gardenID = "",
  plantingType = "",
  plantingDate = "",
  harvestDate = "",
  notes = ""
) {
  this.id = id
  this.gardenPlantName = gardenPlantName
  this.plantID = plantID
  this.gardenID = gardenID
  this.plantingType = plantingType
  this.plantingDate = plantingDate
  this.harvestDate = harvestDate
  this.notes = notes
}

const sunTypes = [
  "full sun",
  "partial sun",
  "mostly shade",
  "shade"
]

const defaultCell = {
  
}

function defaultData() {
  return {
    user: {
      name: ""
    },
    plants: [],
    gardens: [],
    plantMap: [],
    gardenPlants: []
  }
}

export {
  Plant,
  Garden,
  GardenPlant,
  defaultData
}