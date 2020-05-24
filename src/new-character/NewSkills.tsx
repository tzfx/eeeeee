import React from "react";
import {
  Button,
  CardGroup,
  Container,
  Divider,
  Grid,
  Icon,
  Header,
  HeaderContent,
} from "semantic-ui-react";
import {
  Letter,
  MagicPriorities,
} from "../config/rulesets/shadowrun/6e/PriorityOptions";
import { Skill } from "../config/rulesets/shadowrun/6e/skills/Skill.interface";
import { ALL_SKILLS } from "../config/rulesets/shadowrun/6e/skills/SkillIndex";
import { SkillDisplay } from "./SkillDisplay";

type Props = {
  skillPoints: number;
  skillsFinished: (_: State) => void;
} & any;

export type State = {
  points: number;
  selectedSkills: SkillMap;
  skillsList: SkillMap;
  error: string;
};

type SkillMap = Map<string, Skill>;

export type PrioritySelection = {
  rank: Letter;
  value: number | MagicPriorities;
};

class NewSkills extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      points: props.skillPoints,
      selectedSkills: new Map(),
      skillsList: ALL_SKILLS.reduce((map: SkillMap, skill) => {
        map.set(skill.name, skill);
        return map;
      }, new Map()),
      error: "",
    };
  }

  checkMaxes(): boolean {
    const maxed: string[] = [];
    return Array.from(this.state.selectedSkills.values()).every((skill) => {
      if (skill.rank === 6) {
        maxed.push(skill.name);
      }
      this.setState({
        error:
          maxed.length < 2
            ? `You cannot have 2 skills at max [${maxed.join(
                ", "
              )}] at chargen.`
            : "",
      });
      return maxed.length < 2;
    });
  }

  selectSkill = (skill: Skill) => {
    const delta =
      !this.state.selectedSkills.has(skill.name) ||
      (this.state.selectedSkills.get(skill.name) as Skill).rank < skill.rank
        ? 1
        : -1;
    this.setState(
      {
        points: this.state.points - delta,
        selectedSkills: this.state.selectedSkills.set(skill.name, skill),
      },
      () => {
        this.props.skillsFinished(
          this.state.points === 0 && this.checkMaxes()
            ? this.state.selectedSkills
            : undefined
        );
      }
    );
  };

  deselectOrUpdateSkill = (skill: Skill) => {
    if (this.state.selectedSkills.get(skill.name)?.rank !== skill.rank) {
      return this.selectSkill(skill);
    }
    console.log(skill, this.state.selectedSkills.get(skill.name));
    this.state.selectedSkills.delete(skill.name);
    this.setState(
      {
        points: this.state.points + 1,
        selectedSkills: this.state.selectedSkills,
      },
      () => {
        this.props.skillsFinished(
          this.state.points === 0 && this.checkMaxes()
            ? this.state.selectedSkills
            : undefined
        );
      }
    );
  };

  render() {
    return (
      <Container>
        <Header>
          <HeaderContent>{this.state.points} Left</HeaderContent>
        </Header>
        {this.state.error !== "" ? (
          <Button color="red" label>
            <Icon name="exclamation triangle"></Icon>
            {this.state.error}
          </Button>
        ) : (
          ""
        )}
        <Grid divided columns="2" relaxed="very">
          <Grid.Column>
            <CardGroup>
              {Array.from(this.state.skillsList.values())
                .filter((skill) => !this.state.selectedSkills.has(skill.name))
                .map((skill) => {
                  return (
                    <SkillDisplay
                      disableUp={this.state.points === 0}
                      selected={false}
                      select={(skill) => this.selectSkill(skill)}
                      key={skill.name}
                      skill={skill}
                    ></SkillDisplay>
                  );
                })}
            </CardGroup>
          </Grid.Column>
          <Grid.Column>
            <CardGroup>
              {Array.from(this.state.selectedSkills.values()).map((skill) => {
                return (
                  <SkillDisplay
                    disableUp={this.state.points === 0}
                    selected={true}
                    select={(skill) => this.deselectOrUpdateSkill(skill)}
                    key={skill.name}
                    skill={skill}
                  ></SkillDisplay>
                );
              })}
            </CardGroup>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default NewSkills;
