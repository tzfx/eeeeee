import React from 'react';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';
import { CharacterService } from './api/CharacterService';
import './App.css';
import CharacterNav, { NavSection } from './character-nav/CharacterNav';
import { CharacterBio } from './config/rulesets/shadowrun/6e/CharacterBio.interface';
import { Home } from './home/Home';
import { NewCharacter } from './new-character/NewCharacter';


type State = {
  characters: CharacterBio[],
  loadingCharacters: boolean;
  active: NavSection
}

class App extends React.Component<{}, State> {
  
  constructor(props: {}){
    super(props);
    this.state = {
      loadingCharacters: true,
      characters: [],
      active: {
        section: "home"
      }
    }
  }
  
  
  loadCharacters() {
    CharacterService.getCharacters()
        .then(res => res.json())
        .then(data => {
            if (data != null) {
                this.setState({characters: data}, () => {
                  this.setState({loadingCharacters: false});
                });
            }
        });
  }
  
  handleSectionChange = (newNav: NavSection) => {
    this.setState({
      active: newNav
    });
  }

  componentDidMount() {
      this.updateCharacterList();
  }

  updateCharacterList = () => {
    this.loadCharacters();
  }
  
  renderView() {
    let view;
    switch(this.state.active.section) {
      case "home": view = (<Home characters={this.state.characters} campaigns={[]}></Home>); break;
      case "new": view = (<NewCharacter doExit={() => this.handleSectionChange({section: "home"})} newCharacterCreated={this.updateCharacterList} />); break;
      default: view = (<div>An unknown view was encountered.</div>);
    }
    return view;
  }

  render() {
    return (
      <div className="App">
        <Grid>
        <Grid.Column width="3">
          <CharacterNav changeSection={this.handleSectionChange} active={this.state.active} loading={this.state.loadingCharacters} characters={this.state.characters} />
        </Grid.Column>
        <Grid.Column width="11" stretched>
          {
            this.renderView()
          }
        </Grid.Column>
        </Grid>
      </div>
    );
  }

}

export default App;
