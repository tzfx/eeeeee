import React from "react";
import { Card, Icon, CardContent, CardHeader, SemanticICONS, CardMeta, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

type Props = {
    icon: SemanticICONS,
    header: string,
    meta: string,
    link: string
}

export class HomeCard extends React.Component<Props, {}> {

    render() {
        return (
            <Card as={Link} to={this.props.link} link centered>
                <Segment padded>
                    <Icon size="huge" name={this.props.icon} />
                <hr />
                <CardContent>
                    <CardHeader>
                        {this.props.header}
                    </CardHeader>
                    <CardMeta>
                        {this.props.meta}
                    </CardMeta>
                </CardContent>
                </Segment>
            </Card>
        );
    }
}