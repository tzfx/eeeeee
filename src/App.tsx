import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import './App.css';
import { NewCharacter } from './new-character/NewCharacter';
import CharacterNav from './character-nav/CharacterNav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            RPG-Me
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <CharacterNav />
      <main
        className="header"
      >
        <div className="drawerHeader"/>
        <NewCharacter />
      </main>
      
    </div>
  );
}

export default App;
