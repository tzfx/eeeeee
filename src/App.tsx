import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/components/icon.min.css';
import { NewCharacter } from './new-character/NewCharacter';
import CharacterNav from './character-nav/CharacterNav';

class App extends React.Component {

  render() {
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

}

export default App;
