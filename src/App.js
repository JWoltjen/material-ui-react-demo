import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/Textfield'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white', 
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36, 
      marginBottom: 5, 
    }
  },
  palette: {
    primary: {
      main: orange[500], 
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

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
  <ThemeProvider theme={theme}>
    <Container maxWidth='md'>
    <div className="App">
      <header className='App-header'>
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon/>
            </IconButton>
            <Typography variant='h6'>
                MUI Themeing
            </Typography>
            <Button>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Typography variant='h2'>
          Welcome to MUI
        </Typography>
         <Typography variant='subtitle1'>
          Learn how to use Material UI
        </Typography>
      <ButtonStyled/>

    <Grid container spacing={2} justify="center">
      <Grid item>
        <Paper style={{height: 75, width: 50, }}/> 
      </Grid>
      <Grid item>
        <Paper style={{height: 75, width: 50, }}/> 
      </Grid>
      <Grid item>
        <Paper style={{height: 75, width: 50, }}/> 
      </Grid>
    </Grid>

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
    </Container>
    </ThemeProvider>
  );
}

export default App;
