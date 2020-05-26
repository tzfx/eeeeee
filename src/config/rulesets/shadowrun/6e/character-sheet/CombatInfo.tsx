import React from "react";
import { Character } from "../Character";
import SheetTextElement from "./SheetTextElement";
import { Segment, Header, HeaderContent, Grid } from "semantic-ui-react";

type Props = { character: Character };

class CombatInfo extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render = () => (
    <Segment>
      <Header color="violet">
        <HeaderContent size="big">Combat</HeaderContent>
      </Header>
      <Grid container>
        <Grid.Row stretched>
          <Grid.Column width="11">
            <SheetTextElement
              name="Armor"
              value={this.props.character.combat?.armor?.name ?? "Not Equipped"}
            />
          </Grid.Column>
          <Grid.Column width="5">
            <SheetTextElement
              name="DR"
              value={this.props.character.combat?.armor?.rating ?? 0}
            />
          </Grid.Column>
        </Grid.Row>
        <hr />
        <Grid.Row stretched>
          <Grid.Column width="11">
            <SheetTextElement
              name="Ranged"
              value={
                this.props.character.combat?.ranged?.name ?? "Not Equipped"
              }
            />
          </Grid.Column>
          <Grid.Column width="5">
            <SheetTextElement
              name="DV"
              value={this.props.character.combat?.ranged?.dv ?? 0}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column width="4">
            <SheetTextElement
              name="C"
              value={this.props.character.combat?.ranged?.close ?? 0}
            />
          </Grid.Column>
          <Grid.Column width="4">
            <SheetTextElement
              name="N"
              value={this.props.character.combat?.ranged?.near ?? 0}
            />
          </Grid.Column>
          <Grid.Column width="4">
            <SheetTextElement
              name="F"
              value={this.props.character.combat?.ranged?.far ?? 0}
            />
          </Grid.Column>
          <Grid.Column width="4">
            <SheetTextElement
              name="E"
              value={this.props.character.combat?.ranged?.extreme ?? 0}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column width="8">
            <SheetTextElement
              name="Mode"
              value={this.props.character.combat?.ranged?.mode ?? "N/A"}
            />
          </Grid.Column>
          <Grid.Column width="8">
            <SheetTextElement
              name="Ammo"
              value={this.props.character.combat?.ranged?.ammo ?? 0}
            />
          </Grid.Column>
        </Grid.Row>
        <hr />
        <Grid.Row stretched>
          <Grid.Column width="11">
            <SheetTextElement
              name="Melee"
              value={this.props.character.combat?.melee?.name ?? "Not Equipped"}
            />
          </Grid.Column>
          <Grid.Column width="5">
            <SheetTextElement
              name="DV"
              value={this.props.character.combat?.melee?.dv ?? 0}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <SheetTextElement
            name="Close"
            value={this.props.character.combat?.melee?.close ?? 0}
          />
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default CombatInfo;
