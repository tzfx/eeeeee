import { Typography } from '@material-ui/core';
import React from 'react';
import { NewBio } from './NewBio';
import './NewCharacter.css';
import { CharacterBio } from '../config/rulesets/shadowrun/6e/CharacterBio.interface';
import NewPriorities from './NewPriorities';
import { PriorityOptions } from '../config/rulesets/shadowrun/6e/PriorityOptions';



interface State {
    bio: CharacterBio
}


export class NewCharacter extends React.Component<{}, State> {

    constructor(props: any) {
        super(props);
    }
    
    handleBioFinished = (bio: CharacterBio) => {
        console.log("Received new bio:", bio);
    }
    
    handlePrioritiesFinished = (prios: PriorityOptions) => {
        console.log("Received new prios:", prios);
    }
    
    

  render() {
    return (
    <div style={{marginLeft: 240}}>
        <Typography variant="h2">Create a new runner</Typography>
        <NewBio bioFinished={this.handleBioFinished} />
        <NewPriorities prioritiesFinished={this.handlePrioritiesFinished} />
    </div>
    );
  }
}
