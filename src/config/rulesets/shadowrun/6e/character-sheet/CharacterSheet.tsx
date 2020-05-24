import { Character } from "../Character";
import React from "react";
import PersonalData from "./PersonalData";
import { Grid, Paper } from "@material-ui/core";
import CombatInfo from "./CombatInfo";

type Props = { character: Character };

class CharacterSheet extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Paper>
          <Grid item xs={6}>
            <PersonalData character={this.props.character} />
          </Grid>
          <Grid item xs={6}>
            <CombatInfo character={this.props.character} />
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default CharacterSheet;
