import { Typography, Button } from '@material-ui/core';
import React from 'react';
import NewBio from './NewBio';
import { CharacterBio } from '../config/rulesets/shadowrun/6e/CharacterBio.interface';
import NewPriorities from './NewPriorities';
import { PriorityOptions } from '../config/rulesets/shadowrun/6e/PriorityOptions';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { TwoWayIterator } from '../util/TwoWayIterator.class';

type Progress = "bio" | "attributes" | "skills" | "qualities" | "summary";

interface State {
    bio?: CharacterBio,
    priorities?: PriorityOptions,
    progress: Progress
}


export class NewCharacter extends React.Component<{}, State> {
    
    private progression: TwoWayIterator<Progress>;
    

    constructor(props: any) {
        super(props);
        this.progression = new TwoWayIterator([
            "bio",
            "attributes",
            "skills",
            "qualities",
            "summary"
        ]);
        this.state = {progress: this.progression.next() };
        console.log(this.state);
    }
    
    handleBioFinished = (bio: CharacterBio) => {
        console.log("Received new bio:", bio);
        this.setState({bio: bio});
    }
    
    handlePrioritiesFinished = (prios: PriorityOptions) => {
        console.log("Received new prios:", prios);
        this.setState({priorities: prios});
    }
    
    saveAndExit = () => {
        return true;
    }
    
    goNext = () => {
        this.setState({progress: this.progression.next()});
    }
    
    goBack = () => {
        this.setState({progress: this.progression.previous()});
    }
    
    

  render() {
    let currentView;
    switch(this.state.progress) {
        case "bio":
            currentView =
            <div style={{marginLeft: 240}}>
                <Typography variant="h2">Create a new runner</Typography>
                <NewBio bioFinished={this.handleBioFinished} />
                <NewPriorities prioritiesFinished={this.handlePrioritiesFinished} />
                <Button onClick={() => this.saveAndExit()}>
                    <ChevronLeftIcon /> Save & Exit 
                </Button>
                <Button onClick={() => this.goNext()}>
                    Save & Continue to Attributes <ChevronRightIcon />
                </Button>
            </div>
            ; break;
    }
    return (<div>{currentView}</div>);
  }
}
