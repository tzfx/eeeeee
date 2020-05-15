import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/components/icon.min.css';
import { NewCharacter } from './new-character/NewCharacter';
import CharacterNav from './character-nav/CharacterNav';
import { CharacterService } from './api/CharacterService';
import { CharacterBio } from './config/rulesets/shadowrun/6e/CharacterBio.interface';


type State = {
  characters: CharacterBio[]
}

class App extends React.Component<{}, State> {
  
  constructor(props: {}){
    super(props);
    this.state = {
      characters: []
    }
  }
  
  
  loadCharacters() {
    CharacterService.getCharacters()
        .then(res => res.json())
        .then(data => {
            if (data != null) {
                this.setState({characters: data});
            }
        });
  }

  componentDidMount() {
      this.updateCharacterList();
  }

  updateCharacterList = () => {
    this.loadCharacters();
  }

  render() {
    return (
      <div className="App">
        <CharacterNav characters={this.state.characters} />
        <main
          className="header"
        >
          <div className="drawerHeader"/>
          <NewCharacter newCharacterCreated={this.updateCharacterList} />
        </main>
        
      </div>
    );
  }

}

export default App;
