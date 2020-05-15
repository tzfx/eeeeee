import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Theme, withStyles } from '@material-ui/core';
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import { CharacterBio } from '../config/rulesets/shadowrun/6e/CharacterBio.interface';

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

type Props = {
    characters: CharacterBio[]
} & any;

class CharacterNav extends React.Component<Props, { open: boolean, characters: CharacterBio[] }> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            open: true,
            characters: props.characters
        };
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
            { this.props.characters.map((char: CharacterBio) => (
                <ListItem>
                    <ListItemIcon><AccessibilityIcon></AccessibilityIcon></ListItemIcon>
                    <ListItemText primary={char.name}></ListItemText>
                </ListItem>
            ))}
          </Drawer>
        );
    }
}

export default withStyles(useStyles)(CharacterNav);