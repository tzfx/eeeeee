import React from "react";
import { Character } from "../Character";
import { Grid, Paper, Typography } from "@material-ui/core";
import classes from "*.module.css";
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
      size: 12,
    },
    {
      name: "Metatype",
      value: this.props.character.bio.metatype.name,
      size: 6,
    },
    {
      name: "Ethnicity",
      value: this.props.character.bio.ethnicity,
      size: 6,
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
      size: 3,
    },
    {
      name: "Weight",
      value: this.props.character.bio.weight,
      size: 3,
    },
    {
      name: "Reputation",
      value: this.props.character.reputation,
      size: 6,
    },
    {
      name: "Heat",
      value: this.props.character.heat,
      size: 6,
    },
    {
      name: "Karma",
      value: this.props.character.karma,
      size: 4,
    },
    {
      name: "Total Karma",
      value: this.props.character.totalKarma,
      size: 4,
    },
    {
      name: "Misc",
      value: "",
      size: 4,
    },
  ];

  render = () => (
    <Paper>
      <Typography variant="h3">Personal Data</Typography>
      <Grid container spacing={3}>
        {this.elements.map((e) => (
          <Grid item xs={e.size}>
            <Paper className={classes.paper}>
              <SheetTextElement name={e.name} value={e.value} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default PersonalData;
