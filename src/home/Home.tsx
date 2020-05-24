import React from "react";
import { Container, Grid, Header, Icon } from "semantic-ui-react";
import { CharacterBio } from "../config/rulesets/shadowrun/6e/CharacterBio.interface";
import { HomeCard } from "./HomeCard";

type Props = {
  characters: CharacterBio[];
  campaigns: [];
};

export class Home extends React.Component<Props, Record<string, unknown>> {
  render() {
    return (
      <div>
        <br />
        <Icon size="huge" name="chess queen"></Icon>
        <Header textAlign="center" size="huge">
          Welcome to E<sup>6</sup>
        </Header>
        <hr />
        <Header.Subheader>
          You can do a couple different things!
        </Header.Subheader>
        <br />
        <Container>
          <Grid centered columns="2">
            <Grid.Row>
              <Grid.Column textAlign="center">
                <HomeCard
                  icon="male"
                  header="Create or edit a character!"
                  meta="Yeah! Characters are neat!"
                  link="new"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <HomeCard
                  icon="address book"
                  header="View character sheets"
                  meta="Sheets! Sheets!"
                  link="sheets"
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column textAlign="center">
                <HomeCard
                  icon="rocket"
                  header="Start a new play session!"
                  meta="Let's get out there!"
                  link="play"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <HomeCard
                  icon="calendar check outline"
                  header="Resume a play session."
                  meta="Where were we, again?"
                  link="resume"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
