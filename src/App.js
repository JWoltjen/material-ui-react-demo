import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/Textfield'

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
     control={<Checkbox
     checked={checked}
     icon={<DeleteIcon/>}
     checkedIcon={<SaveIcon/>}
     onChange={(e)=>setChecked(e.target.checked)}
     inputProps={{
       'aria-label': 'secondary checkbox'
     }}
     />}
     label='Testing Checkbox'
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <TextField
        variant='filled'
        color='secondary'
        type='email'
        label='The Time'
        placeholder='test@test.com'
      />
      <CheckboxExample/>
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
      </header>
    </div>
  );
}

export default App;
