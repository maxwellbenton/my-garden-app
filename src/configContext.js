import React, { createContext } from "react";
import  { idbKeyval } from './indexDB'
import { defaultData } from './Models'
import { v4 as uuidv4 } from 'uuid';
const { Provider, Consumer } = createContext();


class ConfigProvider extends React.Component {
  state = {
    data: defaultData(),
    addPlant: (plant) => {
      plant.id = uuidv4()
      plant.plantName = "New Plantt"
      console.log(plant.id)
      this.setState(prevState => ({ 
        ...prevState, 
        data: {
          ...prevState.data,
          plants: [...prevState.data.plants, plant] 
        }
      }))
    },
    updatePlant: (id, updatedPlant) => {
      this.setState(prevState => ({ 
        ...prevState, 
        data: {
          ...prevState.data,
          plants: prevState.data.plants.map(existingPlant => {
            if (existingPlant.id === id) {
              return updatedPlant
            } else {
              return existingPlant
            }
          })
        }
      }))
    },
    removePlant: (id) => {
      this.setState(prevState => ({ 
        ...prevState, 
        data: {
          ...prevState.data,
          plants: prevState.data.plants.filter(existingPlant => existingPlant.id !== id)
        }
      }))
    },
    addGarden: (garden) => {
      this.setState(prevState => ({ 
        ...prevState, 
        data: {
          ...prevState.data,
          gardens: [...prevState.data.gardens, garden] 
        }
      }))
    },
    updateGarden: (id, updatedGarden) => {
      this.setState(prevState => ({ 
        ...prevState, 
        data: {
          ...prevState.data,
          gardens: prevState.data.gardens.map(existingGarden => {
            if (existingGarden.id === id) {
              return updatedGarden
            } else {
              return existingGarden
            }
          })
        }
      }))
    },
    removeGarden: (id) => {
      this.setState(prevState => ({ 
        ...prevState, 
        data: {
          ...prevState.data,
          gardens: prevState.data.gardens.filter(existingGarden => existingGarden.id !== id)
        }
      }))
    },
    addPlantToGarden: (plant, garden, gardenPlant) => {
      this.setState(prevState => ({ 
        ...prevState, 
        data: {
          ...prevState.data,
          gardenPlants: [...prevState.data.gardenPlants, gardenPlant] 
        }
      }))
    },
    removePlantFromGarden: (id) => {
      this.setState(prevState => ({ 
        ...prevState, 
        data: {
          ...prevState.data,
          gardenPlants: prevState.data.gardenPlants.filter(existingGardenPlant => existingGardenPlant.id !== id)
        }
      }))
    },
    resetData: () => {
      this.setState(prevState => ({
        ...prevState, 
        data: defaultData()
      }))
    }
  };

  async componentDidMount() {
    let data = await idbKeyval.get('data')
    if (!data) {
      await idbKeyval.set('data', this.state.data)
    } else {
      this.setState({ data })
    }
  }

  async componentDidUpdate() {
    
    let data = await idbKeyval.get('data')
    if (JSON.stringify(data) !== JSON.stringify(this.state.data)) {
      await idbKeyval.set('data', this.state.data)
    }
  }


  render() {
    console.log(this.state.data)
    return (
      <Provider
        value={{ ...this.state }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ConfigProvider };
export default Consumer;