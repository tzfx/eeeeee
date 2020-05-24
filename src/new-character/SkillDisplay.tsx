import { Skill } from "../config/rulesets/shadowrun/6e/skills/Skill.interface";
import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMeta,
  Icon,
  ButtonGroup,
} from "semantic-ui-react";

type Props = {
  selected: boolean;
  skill: Skill;
  disableUp?: boolean;
  select: (skill: Skill) => void;
};

type State = {
  max: number;
  skill: Skill;
};

export class SkillDisplay extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      max: 6,
      skill: this.props.skill,
    };
  }

  specialize(specialization: string) {
    const skill = Object.assign({}, this.props.skill);
    skill.specialized = specialization;
    this.props.select(skill);
  }

  rankUp() {
    const skill = Object.assign({}, this.props.skill);
    skill.rank = skill.rank == null ? 1 : skill.rank + 1;
    this.props.select(skill);
  }

  rankDown() {
    const skill = Object.assign({}, this.props.skill);
    skill.rank = skill.rank == null ? 1 : skill.rank - 1;
    this.props.select(skill);
  }

  select() {
    this.props.select(this.props.skill);
  }

  handleSelect() {
    if (this.props.selected) {
      if ((this.props.skill.rank ?? 0) > 1) this.rankDown();
      else this.select();
    } else {
      this.props.select(this.props.skill);
    }
  }

  render() {
    return (
      <Card>
        <CardContent>
          <CardHeader>
            {this.props.skill.name}{" "}
            {this.props.selected ? `- Rank ${this.props.skill.rank}` : ""}
          </CardHeader>
          <CardMeta>
            (
            {[
              this.props.skill.primaryAttribute,
              this.props.skill.secondaryAttribute,
            ]
              .filter(Boolean)
              .join(", ")}
            )
          </CardMeta>

          <ButtonGroup>
            {!this.props.selected ? (
              <Button
                color="blue"
                attached="bottom"
                disabled={this.props.disableUp === true}
                onClick={() => this.handleSelect()}
              >
                <Icon name="add circle"></Icon>
                Add
              </Button>
            ) : this.props.skill.rank === 1 ? (
              <Button
                color="red"
                attached="bottom"
                onClick={() => this.select()}
              >
                <Icon name="remove circle"></Icon>
                Remove
              </Button>
            ) : (
              <Button
                color="red"
                attached="bottom"
                onClick={() => this.rankDown()}
              >
                <Icon name="arrow circle down"></Icon>
                Rank Down
              </Button>
            )}
            {this.props.selected ? (
              <Button
                color="teal"
                disabled={
                  this.props.disableUp === true ||
                  this.props.skill.rank === this.state.max
                }
                onClick={() => this.rankUp()}
              >
                <Icon name="arrow circle up"></Icon>
                Rank Up
              </Button>
            ) : null}
          </ButtonGroup>
        </CardContent>
      </Card>
    );
  }
}
