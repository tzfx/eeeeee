import React from "react";
import { Grid, Header, HeaderContent, Segment } from "semantic-ui-react";
import { Character } from "../Character";
import SheetTextElement from "./SheetTextElement";

type Props = { character: Character };

type ElementData = {
  name: string;
  value: any;
  size: any;
};

class PersonalData extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  elements: ElementData[] = [
    {
      name: "Name/Alias",
      value: this.props.character.bio.name,
      size: 16,
    },
    {
      name: "Metatype",
      value: this.props.character.bio.metatype.name,
      size: 8,
    },
    {
      name: "Ethnicity",
      value: this.props.character.bio.ethnicity,
      size: 8,
    },
    {
      name: "Age",
      value: this.props.character.bio.age,
      size: 3,
    },
    {
      name: "Sex",
      value: this.props.character.bio.sex,
      size: 3,
    },
    {
      name: "Height",
      value: this.props.character.bio.height,
      size: 5,
    },
    {
      name: "Weight",
      value: this.props.character.bio.weight,
      size: 5,
    },
    {
      name: "Reputation",
      value: this.props.character.reputation,
      size: 8,
    },
    {
      name: "Heat",
      value: this.props.character.heat,
      size: 8,
    },
    {
      name: "Karma",
      value: this.props.character.karma,
      size: 5,
    },
    {
      name: "Total Karma",
      value: this.props.character.totalKarma,
      size: 5,
    },
    {
      name: "Misc",
      value: "",
      size: 6,
    },
  ];

  render = () => (
    <Segment>
      <Header color="violet">
        <HeaderContent size="big">Personal Data</HeaderContent>
      </Header>
      <Grid>
        {this.elements.map((e) => (
          <Grid.Column stretched key={e.name} width={e.size}>
            <SheetTextElement name={e.name} value={e.value} />
          </Grid.Column>
        ))}
      </Grid>
    </Segment>
  );
}

export default PersonalData;
