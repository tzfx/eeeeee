import React from "react";
import { Grid } from "semantic-ui-react";
// import { CharacterService } from "../../../../../api/CharacterService";
import { AdeptExample } from "../archetypes/Adept";
import { Character } from "../Character";
import Attributes from "./Attributes";
import CombatInfo from "./CombatInfo";
import { ConditionMonitor } from "./ConditionMonitor";
import PersonalData from "./PersonalData";
import { SkillList } from "./SkillList";
import { QualityList } from "./QualityList";

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
      <Grid relaxed stackable>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width="10">
            <br />
            <PersonalData character={this.state.character} />
          </Grid.Column>
          <Grid.Column width="6">
            <br />
            <CombatInfo character={this.state.character} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="2">
          <Grid.Column width="8">
            <Attributes character={this.state.character}></Attributes>
          </Grid.Column>
          <Grid.Column width="8">
            <ConditionMonitor character={this.state.character} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="8">
            <SkillList character={this.state.character}></SkillList>
          </Grid.Column>
          <Grid.Column width="8">
            <QualityList character={this.state.character} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default CharacterSheet;
