import React, {useState} from 'react';
import GardenView from './GardenView';
import Controls from './Controls';
import { ConfigProvider } from '../configContext';
import '../App.css';
import PlantGrid from './PlantGrid'
import PlantList from './PlantList'


function App() {
  const [page, setPage] = useState('plant list')
  
  function displayPage() {
    switch (page) {
      case "plant list":
        return <PlantList />
      case "garden kanban":
        return <GardenView />
      case "plant grid":
        return <PlantGrid />
    }
  }

  function handleTab(tab) {
    setPage(tab)
  }

  return (
    <div className="App">
      <ConfigProvider>
        <header>
          <h1>My Garden App</h1>
          <span onClick={() => handleTab('plant list')}>Plant List</span>
          <span onClick={() => handleTab('garden kanban')}>Garden View</span>
          <span onClick={() => handleTab('plant grid')}>Plant Grid</span>
        </header>
        <main>
          {displayPage()}
        </main>
      </ConfigProvider>
    </div>
  );
}

export default App;
