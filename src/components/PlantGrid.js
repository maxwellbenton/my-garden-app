import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';


function PlantCell() {
  const [classes, setClasses] = useState("cell")
  const [style, setStyle] = useState({
    width: '50px',
    height: '50px',
    background: 'grey',
    margin: '4px',
    padding: '4px',
    border: '1px solid black'
  })

  function handleEnter() {
    console.log('enter')
    setClasses("cell hover")
  }

  function handleLeave() {
    console.log('leave')
    setClasses("cell")
  }

  function handleClick() {
    setStyle(preStyle =>({
      ...preStyle,
      background: '#AAA'
    }))
  }

  return (
    <div className={classes} onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={style}>

    </div>
  )
}

export default function PlantGrid() {
  // const [numOfColumns, setNumOfColumns] = useState(10)
  // const [numOfRows, setNumOfRows] = useState(10)
  const [cellSize, setCellSize] = useState(50)
  const [selectedCellID, setSelectedCellID] = useState(null)

  // function generateCells() {
  //   let gridSet = []

  //   for(let row = 0; row < numOfRows; row++) {
  //     for(let column = 0; column < numOfColumns; column++) {
  //       if (selectedCell) {

  //       }
  //       gridSet.push(<PlantCell key={`${row},${column}`} selected={selected}/>)
  //     }  
  //   }
  //   return gridSet
  // }


  return (
    <div style={{
      display: 'grid',
      justifyContent: 'center',
      gridGap: 15
    }}>
      Grid
    </div>
  )
}

// gridTemplateRows: `repeat(${numOfRows}, ${cellSize}px)`,
//       gridTemplateColumns: `repeat(${numOfColumns}, ${cellSize}px)`,
      