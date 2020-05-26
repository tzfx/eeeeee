import { Segment, Header, Table } from "semantic-ui-react";
import { Character } from "../Character";
import React from "react";
import { Quality } from "../qualities/Quality";

type Props = {
  character: Character;
};

export class QualityList extends React.Component<Props> {
  render() {
    return (
      <Segment>
        <Header color="violet">Qualities</Header>
        <Table>
          <Table.Header>
            <Table.HeaderCell>Quality</Table.HeaderCell>
            <Table.HeaderCell>Effect</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {this.props.character.qualities.map((quality: Quality) => {
              return (
                <Table.Row key={quality.name}>
                  {[quality.name, quality.effect].map((val, i) => {
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
