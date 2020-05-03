import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Theme, withStyles } from '@material-ui/core';
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import { Character } from '../config/rulesets/shadowrun/6e/Character';

export const drawerWidth = 240;

const useStyles = (theme: Theme) => {
    return {
        root: {
        display: 'flex',
        },
        branding: {
            height: 64
        },
        menuButton: {
        marginRight: theme.spacing(2),
        },
        hide: {
        display: 'none',
        },
        drawer: {
        width: drawerWidth,
        flexShrink: 0,
        },
        drawerPaper: {
        width: drawerWidth,
        },
        drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        },
        content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        },
        contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        },
    };
};

class CharacterNav extends React.Component<any, { open: boolean, characters: Character[] }> {
    
    constructor() {
        super({});
        this.state = {
            open: true,
            characters: []
        };
    }
    
    componentDidMount() {
        let characters: Character[] = [];
        fetch("http://localhost:3001/api/characters", {mode: "no-cors"})
            // .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.body != null) {
                    characters = data.body as any;
                }
               // characters.push(data);
            });
        this.setState({characters: characters});
    }
    
    render() {
        const { classes } = this.props;
        return (
            <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={this.state.open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.branding}>
                <FingerprintIcon fontSize="large"/>
            </div>
            <Divider />
            <List>
                <ListItem button key="new">
                  <ListItemIcon><AddBoxIcon /></ListItemIcon>
                  <ListItemText primary="New Character" />
                </ListItem>
            </List>
            <Divider />
            { this.state.characters.map(char => (
                <ListItem>
                    <ListItemIcon><AccessibilityIcon></AccessibilityIcon></ListItemIcon>
                    <ListItemText primary={char.bio.name}></ListItemText>
                </ListItem>
            ))}
          </Drawer>
        );
    }
}

export default withStyles(useStyles)(CharacterNav);