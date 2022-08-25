import logo from './logo.svg';
import Button from "@material-ui/core/button"
import './App.css';
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import  ButtonGroup from '@material-ui/core/ButtonGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
