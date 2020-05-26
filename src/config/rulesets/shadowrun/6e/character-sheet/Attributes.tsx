import React from "react";
import { Character } from "../Character";
import SheetTextElement from "./SheetTextElement";
import { Segment, Header, Grid } from "semantic-ui-react";

type Props = { character: Character };

type ElementData = {
  name: string;
  value: any;
  size: any;
};

class Attributes extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  elements: ElementData[] = [
    {
      name: "Body",
      value: this.props.character.attributes.body,
      size: 6,
    },
    {
      name: "Essense",
      value: this.props.character.attributes.essense,
      size: 6,
    },
    {
      name: "Reaction",
      value: this.props.character.attributes.reaction,
      size: 6,
    },
    {
      name: "Magic/Resonance",
      value: this.props.character.attributes.magic,
      size: 6,
    },
    {
      name: "Reaction",
      value: this.props.character.attributes.reaction,
      size: 6,
    },
    {
      name: "Initiative",
      value: this.props.character.initiative,
      size: 6,
    },
    {
      name: "Strength",
      value: this.props.character.attributes.strength,
      size: 6,
    },
    {
      name: "Matrix Initiative",
      value: this.props.character.initiative,
      size: 6,
    },
    {
      name: "Willpower",
      value: this.props.character.attributes.willpower,
      size: 6,
    },
    {
      name: "Logic",
      value: this.props.character.attributes.logic,
      size: 6,
    },
    {
      name: "Composure",
      value: this.props.character.composure,
      size: 6,
    },
    {
      name: "Intuition",
      value: this.props.character.attributes.intuition,
      size: 6,
    },
    {
      name: "Judge Intentions",
      value: this.props.character.judgeIntentions,
      size: 6,
    },
    {
      name: "Charisma",
      value: this.props.character.attributes.charisma,
      size: 6,
    },
    {
      name: "Memory",
      value: this.props.character.memory,
      size: 6,
    },
    {
      name: "Edge",
      value: this.props.character.attributes.edge,
      size: 6,
    },
    {
      name: "Lift/Carry",
      value: this.props.character.lift,
      size: 6,
    },
    {
      name: "Edge Points",
      value: this.props.character.attributes.edgePoints,
      size: 6,
    },
    {
      name: "Movement",
      value: this.props.character.attributes.movement,
      size: 6,
    },
    {
      name: "Unarmed",
      value: this.props.character.attributes.unarmed,
      size: 6,
    },
    {
      name: "Defense Rating",
      value: this.props.character.defenseRating,
      size: 6,
    },
  ];

  render = () => (
    <Segment>
      <Header color="violet">Attributes</Header>
      <Grid columns="2" stretched>
        {this.elements.map((e) => (
          <Grid.Column key={e.name} textAlign="right">
            <SheetTextElement name={e.name} value={e.value} />
          </Grid.Column>
        ))}
      </Grid>
    </Segment>
  );
}

export default Attributes;
