import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/components/icon.min.css';
import { NewCharacter } from './new-character/NewCharacter';
import CharacterNav, { NavSection } from './character-nav/CharacterNav';
import { CharacterService } from './api/CharacterService';
import { CharacterBio } from './config/rulesets/shadowrun/6e/CharacterBio.interface';
import { Container, SidebarPusher } from 'semantic-ui-react';
import { Home } from './home/Home';


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
      case "home": view = (<Home></Home>); break;
      case "new": view = (<NewCharacter doExit={() => this.handleSectionChange({section: "home"})} newCharacterCreated={this.updateCharacterList} />); break;
      default: view = (<div>An unknown view was encountered.</div>);
    }
    return view;
  }

  render() {
    return (
      <div className="App">
        <CharacterNav changeSection={this.handleSectionChange} active={this.state.active} loading={this.state.loadingCharacters} characters={this.state.characters} />
        <SidebarPusher>
          <Container>
            {
              this.renderView()
            }
          </Container>
        </SidebarPusher>
      </div>
    );
  }

}

export default App;
