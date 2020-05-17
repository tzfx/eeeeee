import { Grid, CardHeader, CardDescription, Header, Icon, CardContent, CardMeta, Card } from "semantic-ui-react";
import React from "react";
import { HomeCard } from "./HomeCard";

export class Home extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <br />
                <Icon size="huge" name="chess queen"></Icon>
                <Header size="huge">
                    Welcome to E<sup>6</sup>
                </Header>
                <hr />
                <Header.Subheader>
                    You can do a couple different things!
                </Header.Subheader>
                <br />
                <Grid centered columns="2">
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <HomeCard icon="male" header="Create a new character!" meta="Yeah! Characters are neat!" link="" />
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <HomeCard icon="address book" header="Check character sheets" meta="Sheets! Sheets!" link="" />
                        </Grid.Column>
                    </Grid.Row>
                    
                    
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <HomeCard icon="rocket" header="Start a new play session!" meta="Let's get out there!" link="" />
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <HomeCard icon="calendar check outline" header="Resume a play session." meta="Where we we, again?" link="" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
        
    }
}
