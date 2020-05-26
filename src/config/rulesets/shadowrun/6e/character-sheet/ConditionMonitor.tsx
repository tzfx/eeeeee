import React from "react";
import { Container, Header, Rating, Segment } from "semantic-ui-react";
import { Character } from "../Character";

type Props = {
  character: Character;
};

type State = {
  maxDamage: number;
  maxStun: number;
  maxEdge: number;
  physicalDamage: number;
  stunDamage: number;
  edge: number;
};

export class ConditionMonitor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      maxDamage: 8 + Math.ceil(this.props.character.attributes.body / 2),
      maxStun: 8 + Math.ceil(this.props.character.attributes.willpower / 2),
      maxEdge: this.props.character.attributes.edge,
      physicalDamage: 0,
      stunDamage: 0,
      edge: this.props.character.attributes.edgePoints || 0,
    };
  }

  render() {
    return (
      <Segment>
        <Header color="violet">Status Monitor</Header>
        <Segment>
          <Header>Physical Damage</Header>
          <Container>
            <Rating
              clearable
              icon="heart"
              maxRating={this.state.maxDamage}
              rating={this.state.physicalDamage}
              onRate={(_, v) => {
                this.setState({ physicalDamage: v.rating as number });
              }}
            ></Rating>
            <br />
            {Math.floor(this.state.physicalDamage / 3) > 0
              ? `- ${Math.floor(this.state.physicalDamage / 3)} dice mod`
              : ""}
          </Container>
        </Segment>
        <Segment>
          <Header>Stun Damage</Header>
          <Container>
            <Rating
              clearable
              icon="star"
              maxRating={this.state.maxStun}
              rating={this.state.stunDamage}
              onRate={(_, v) => {
                this.setState({ stunDamage: v.rating as number });
              }}
            ></Rating>
            <br />
            {Math.floor(this.state.stunDamage / 3) > 0
              ? `- ${Math.floor(this.state.stunDamage / 3)} dice mod`
              : ""}
          </Container>
        </Segment>
        <Segment>
          <Header>Edge</Header>
          <Container>
            <Rating
              clearable
              maxRating={this.state.maxEdge}
              rating={this.state.edge}
              onRate={(_, v) => {
                this.setState({ edge: v.rating as number });
              }}
            ></Rating>
          </Container>
        </Segment>
      </Segment>
    );
  }
}
