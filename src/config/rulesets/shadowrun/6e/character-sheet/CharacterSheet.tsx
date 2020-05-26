import { Character } from "../Character";
import React from "react";
import PersonalData from "./PersonalData";
import { Grid, Paper } from "@material-ui/core";
import CombatInfo from "./CombatInfo";
// import { CharacterService } from "../../../../../api/CharacterService";
import { AdeptExample } from "../archetypes/Adept";

type Props = { uuid: string };

type State = {
  loading: boolean;
  character: Character;
};

class CharacterSheet extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      character: AdeptExample,
    };
  }

  componentDidMount() {
    // CharacterService.getCharacter(this.props.uuid)
    //   .then((res) => res.json())
    //   .then((char: Character) => {
    //     this.setState({ character: char }, () => {
    //       this.setState({ loading: false });
    //     });
    //   });
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Paper>
          <Grid item xs={6}>
            <PersonalData character={this.state.character} />
          </Grid>
          <Grid item xs={6}>
            <CombatInfo character={this.state.character} />
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default CharacterSheet;
