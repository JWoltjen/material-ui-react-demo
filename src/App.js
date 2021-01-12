
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

function App() {
  return (
    <div className="App">
      <Button 
        endIcon={<SaveIcon />}
        size='large'
        variant='contained'
        color='primary'>
          Hello World
      </Button>
    </div>
  );
}

export default App;
