import { FormControl, InputLabel, MenuItem, Select, TextField, Typography, Input, Button, FormLabel, RadioGroup, FormControlLabel, Radio, makeStyles, withStyles, Grid } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { CharacterBioBuilder } from '../config/rulesets/shadowrun/6e/CharacterBioBuilder';
import { Metatypes } from '../config/rulesets/shadowrun/6e/metatype/Metatypes';

// import './NewCharacter.css';
import { CharacterBio } from '../config/rulesets/shadowrun/6e/CharacterBio.interface';

const styles = {
    formControl: {
        minWidth: "170px",
        paddingLeft: "10px",
        paddingRight: "10px"
    }
}

type Props = {
    bioFinished: (bio: CharacterBio) => void
} & any;

type State = {
    bioBuilder: CharacterBioBuilder;
}


class NewBio extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            bioBuilder: new CharacterBioBuilder()
        };
    }
    
    okBio = (event: ChangeEvent<any>) => {
        this.props.bioFinished(this.state.bioBuilder.build());
    }
    
    updateMeta = (event: ChangeEvent<any>) => {
      const type = Metatypes.types.find(t => t.name === event.target?.value);
      if (type !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setMetatype(type).setHeight(type.averageHeight).setWeight(type.averageWeight)});
      }
    }
  
    updateName = (event: ChangeEvent<any>) => {
        if (event.target?.value !== undefined) {
            this.setState({bioBuilder: this.state.bioBuilder.setName(event.target.value)});
        }
    }
  
    updateEthnicity = (event: ChangeEvent<any>) => {
        if (event.target?.value !== undefined) {
            this.setState({bioBuilder: this.state.bioBuilder.setEthnicity(event.target.value)});
        }
    }
  
  updateSex = (event: ChangeEvent<any>) => {
    if (event.target?.value !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setSex(event.target.value)});
    }
  }
  
  updateAge = (event: ChangeEvent<any>) => {
    if (event.target?.value !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setAge(event.target.value)});
    }
  }
  
 updateHeight = (event: ChangeEvent<any>) => {
    if (event.target?.value !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setHeight(event.target.value)});
    }
  }
  
  updateWeight = (event: ChangeEvent<any>) => {
    if (event.target?.value !== undefined) {
        this.setState({bioBuilder: this.state.bioBuilder.setWeight(event.target.value)});
    }
  }

  render() {
    const { classes } = this.props;
    return (
        <form className="new-character-form">
            <Grid spacing={2}>
                <Grid item xs={12}>
                    <TextField className={classes.formControl} id='name' label='Character Name' onChange={this.updateName}/>
                    <TextField className={classes.formControl} id='name' label='Ethnicity' onChange={this.updateEthnicity}/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Metatype</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.bioBuilder.metatype?.name || ""}
                            onChange={this.updateMeta}
                        >
                            {Metatypes.types.map(type => <MenuItem key={type.name} value={type.name}>{type.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

            <Grid item xs={12}>
            <FormControl className={classes.formControl}
                            component="fieldset">
                <FormLabel component="legend">Sex</FormLabel>
                <RadioGroup 
                    aria-label="sex"
                    name="sex"
                    value={this.state.bioBuilder.sex}
                    onChange={this.updateSex}>
                        <FormControlLabel value={"F"} control={<Radio />} label="Female"/>
                        <FormControlLabel value={"M"} control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id='age-label'>Age</InputLabel>
                <Input
                    className={classes.formControl}
                    value={this.state.bioBuilder.age}
                    margin="dense"
                    onChange={this.updateAge}
                    inputProps={{
                        type: 'number'
                    }}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id='height-label'>Height (m)</InputLabel>
                <Input
                    className={classes.formControl}
                    value={this.state.bioBuilder.height}
                    margin="dense"
                    onChange={this.updateHeight}
                    onBlur={this.updateHeight}
                    inputProps={{
                        step: .01,
                        min: 1,
                        max: 2,
                        type: 'number'
                    }}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id='age-label'>Weight (kg)</InputLabel>
                <Input
                    className={classes.formControl}
                    value={this.state.bioBuilder.weight}
                    margin="dense"
                    onChange={this.updateWeight}
                    onBlur={this.updateWeight}
                    inputProps={{
                        step: 10,
                        min: 30,
                        max: 500,
                        type: 'number'
                    }}
                />
            </FormControl>
            </Grid>
            <FormControl className={classes.formControl}>
                <Button
                    disabled={!this.state.bioBuilder.isReady()}
                    onClick={this.okBio}
                >
                        Save
                </Button>
            </FormControl>
            </Grid>
        </form>
    );
  }
}

export default withStyles(styles)(NewBio);