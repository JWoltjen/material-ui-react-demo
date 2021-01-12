
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'

function App() {
  return (
    <div className="App">
      <ButtonGroup>
      <Button 
        endIcon={<SaveIcon />}
        size='large'
        variant='contained'
        color='primary'>
          Save
      </Button>
      <Button 
        endIcon={<SaveIcon />}
        size='large'
        variant='contained'
        color='secondary'>
          Discard
      </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
