import React from 'react';
import { Button, ButtonGroup, Icon, Input, Item, List, Menu, Message, Segment } from 'semantic-ui-react';
import { CharacterBio } from '../config/rulesets/shadowrun/6e/CharacterBio.interface';

export const drawerWidth = 240;


type Section = "home" | "new" | "shop" | "sheet" | "play";

export type NavSection = {
  character?: CharacterBio,
  section: Section
};


type Props = {
    characters: CharacterBio[],
    loading: boolean,
    changeSection: (newNav: NavSection) => void,
    active: NavSection
};


type State = {
    open: boolean,
    filteredCharacters: CharacterBio[],
    searchInput?: string
}
class CharacterNav extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            open: true,
            filteredCharacters: this.props.characters,
            searchInput: ""
        };
    }

    doSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const input = event.target;
        this.setState({
            searchInput: input.value
        }, () => {
            this.setState({
                filteredCharacters: (input.value as string !== "") ? this.props.characters.filter((char: CharacterBio) => char.name.toLowerCase().startsWith((input.value as string).toLowerCase())) : this.props.characters
            });
        });
    }

    componentDidUpdate(prevProps: Props) {
        // Initial load from API.
        if (prevProps.loading && !this.props.loading)
            this.setState({
                filteredCharacters: this.props.characters
            });
    }

    render() {
        return (
              <Menu vertical fluid tabular>
                <br />
                <Segment vertical>
                    <Icon name="chess queen" size="big" />
                    <Item.Header>
                        EEEEEE
                    </Item.Header>
                </Segment>
                <List>
                    <List.Item>
                        <List.Content>  
                            <Button onClick={() => this.props.changeSection({section: "new"})}>
                                <List.Header>
                                    <Icon name="add square" />
                                    Create a new character
                                </List.Header>
                            </Button>
                        </List.Content>
                    </List.Item>
                    <br />
                    <List.Item>
                        <List.Content>
                            <Input
                                loading={this.props.loading}
                                type="text"
                                icon="search"
                                placeholder="Search for a character..."
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.doSearch(event)}
                            />
                        </List.Content>
                    </List.Item>
                { this.state.filteredCharacters.map((char: CharacterBio) => (
                    <List.Item key={char.uuid}>
                        <List.Content verticalAlign="middle">
                            <Segment>
                            <List.Header>
                                {char.name}
                                <ButtonGroup floated="right">
                                    <Button icon="shopping cart" size="mini">
                                    </Button>
                                    <Button size="mini" icon="address book">
                                    </Button>
                                </ButtonGroup>
                            </List.Header>
                            <List.Description>
                                <Icon name={char.sex === "M" ? "mars" : "venus"} />
                                {char.metatype.name}
                            </List.Description>
                            </Segment>
                        </List.Content>
                    </List.Item>
                ))}
                { this.props.characters.length === 0 && !this.props.loading ? (
                    <Message>
                        <Message.Content>
                            <p>You don't seem to have any characters created!</p>
                        </Message.Content>
                    </Message>
                ) : ""}
                </List>
              </Menu>
        );
    }
}

export default CharacterNav;