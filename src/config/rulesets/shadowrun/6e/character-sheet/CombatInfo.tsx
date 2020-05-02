import React from "react";
import { Character } from "../Character";
import { Grid, Paper, Typography } from "@material-ui/core";
import classes from "*.module.css";
import SheetTextElement from "./SheetTextElement";

type Props = { character: Character }

class CombatInfo extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    
    render = () => (
        <Paper>
            <Typography variant="h3">Core Combat Info</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <SheetTextElement name="Primary Armor" value={this.props.character.combat?.armor?.name ?? 'Not Equipped'} />
                        <SheetTextElement name="Rating" value={this.props.character.combat?.armor?.rating ?? 0} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <SheetTextElement name="Primary Ranged Weapon" value={this.props.character.combat?.ranged?.name ?? 'Not Equipped'} />
                        <hr />
                        <SheetTextElement name="Rating" value={this.props.character.combat?.ranged?.dv ?? 0} />
                        <SheetTextElement name="Mode" value={this.props.character.combat?.ranged?.mode ?? 'N/A'} />
                        <SheetTextElement name="Close" value={this.props.character.combat?.ranged?.close ?? 0} />
                        <SheetTextElement name="Near" value={this.props.character.combat?.ranged?.near ?? 0} />
                        <SheetTextElement name="Far" value={this.props.character.combat?.ranged?.far ?? 0} />
                        <SheetTextElement name="Extreme" value={this.props.character.combat?.ranged?.extreme ?? 0} />
                        <SheetTextElement name="Ammo" value={this.props.character.combat?.ranged?.ammo ?? 0} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <SheetTextElement name="Primary Melee Weapon" value={this.props.character.combat?.melee?.name ?? 'Not Equipped'} />
                        <hr />
                        <SheetTextElement name="DV" value={this.props.character.combat?.melee?.dv ?? 0} />
                        <SheetTextElement name="Close" value={this.props.character.combat?.melee?.close ?? 0} />
                    </Paper>
                </Grid>
            </Grid>
        </Paper>

    )
}

export default CombatInfo;