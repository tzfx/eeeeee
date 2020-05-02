import { makeStyles } from '@material-ui/core/styles';
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
