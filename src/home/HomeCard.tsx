import React from "react";
import { Card, Icon, CardContent, CardHeader, CardDescription, SemanticICONS, CardMeta } from "semantic-ui-react";

type Props = {
    icon: SemanticICONS,
    header: string,
    meta: string,
    link: string
}

export class HomeCard extends React.Component<Props, {}> {
    
    constructor(props: Props) {
        super(props);
    }
    
    render() {
        return (
            <Card>
                <br />
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
            </Card>
        );
    }
}