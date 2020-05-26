import { Segment, Header, Table } from "semantic-ui-react";
import { Character } from "../Character";
import React from "react";
import { Skill } from "../skills/Skill.interface";

type Props = {
  character: Character;
};

export class SkillList extends React.Component<Props> {
  render() {
    return (
      <Segment>
        <Header color="violet">Skills</Header>
        <Table>
          <Table.Header>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Rank</Table.HeaderCell>
            <Table.HeaderCell>Attribute</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {this.props.character.skills.map((skill: Skill) => {
              return (
                <Table.Row key={skill.name}>
                  {[
                    skill.name.concat(
                      `${skill.specialized ? " - " + skill.specialized : ""}`
                    ),
                    skill.rank,
                    skill.primaryAttribute,
                  ].map((val, i) => {
                    return <Table.Cell key={i}>{val}</Table.Cell>;
                  })}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}
