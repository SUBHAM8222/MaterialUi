import logo from './logo.svg';
import Button from "@material-ui/core/button"
import { useState } from 'react';
import './App.css';
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import  ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Checkboxcheck=()=>{
  const [checked,setchecked]=useState(true);
  return(
    <FormControlLabel
    control={<div><Checkbox
      checked={checked}
      icon={<DeleteIcon/>}
      checkedIcon={<SaveIcon/>}
      onChange={(e)=>setchecked(e.target.checked)}
      ></Checkbox></div>
      }
      label='Testing checkbox'/>

    
  )


}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Checkboxcheck/>
        <ButtonGroup>
        <Button 
         startIcon={<SaveIcon/>}
         variant='contained'  color='primary'>
          SAVE
         </Button>
         <Button 
         startIcon={<DeleteIcon/>}
         variant='contained'  color='secondary'>
          DISCARD
         </Button>
        </ButtonGroup>
        

        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
