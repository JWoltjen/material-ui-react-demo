import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
     <Checkbox 
     checked={checked}
     onChange={(e)=>setChecked(e.target.checked)}
     inputProps={{
       'aria-label': 'secondary checkbox'
     }}
     />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ButtonGroup size='large' variant='contained' color='primary' >
      <Button 
        endIcon={<SaveIcon />}
      >
          Save
      </Button>
      <Button 
        endIcon={<DeleteIcon />}
        >
          Discard
      </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
