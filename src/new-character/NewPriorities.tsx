import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles } from "@material-ui/core";
import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Letter, MagicPriorities, PriorityOptions, PRIORITY_LETTERS, PRIORITY_TYPES } from "../config/rulesets/shadowrun/6e/PriorityOptions";


const useStyles = (theme: Theme) => {
    return {
        priorityTable: {
            width: "max-content",
            margin: "auto"
        },
        priorityCell: {
            cursor: "pointer"
        },
        selectedCell: {
            backgroundColor: "grey"
        }
    }
};

type Props = {
    prioritiesFinished: (_: State) => void
} & any;

export type State = {
    Metatype?: PrioritySelection,
    Attributes?: PrioritySelection,
    Magic?: PrioritySelection,
    Skills?: PrioritySelection,
    Resources?: PrioritySelection
};

export type PrioritySelection = {
    rank: Letter,
    value: number | MagicPriorities
};

class NewPriorities extends React.Component<Props, State> {
    
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    
    isInvalid = () => {
        const ranks = new Set();
        Object.values(this.state)
        .forEach(
            (val: any) => {
                if (ranks.has(val.rank)) {
                    return true;
                }
                ranks.add(val.rank);
            }
        );
        return ranks.size !== 5;
    }
    
    generatePriorities = () => {
        this.props.prioritiesFinished(this.state);
    }
    
    selectPriority = (type: string, letter: Letter) => {
        const state = Object.assign({}, this.state) as any;
        switch(type) {
            case "Metatype":
            case "Attributes":
            case "Skills":
            case "Resources":
            case "Magic": state[type] = {
                rank: letter,
                value: PriorityOptions[type][letter]
            };
        }
        this.setState(state);
    }
    
    render() {
        const { classes } = this.props;
        return (
            <TableContainer component={Paper}>
                <Table className={classes.priorityTable} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {PRIORITY_TYPES.map(k => (<TableCell key={k} align="right">{k}</TableCell>))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {PRIORITY_LETTERS.map((letter) => (
                        <TableRow key={letter}>
                        <TableCell component="th" scope="row">
                            {letter}
                        </TableCell>
                        {
                            PRIORITY_TYPES.map(k => {
                                if (k === "Magic") {
                                    return (
                                    <TableCell
                                      id={`${k}:${letter}`}
                                      onClick={() => this.selectPriority(k, letter)}
                                      className={                                         [
                                        classes.priorityCell,
                                        (this.state as any)[k]?.value === (PriorityOptions as any)[k][letter] ? classes.selectedCell : false
                                      ].filter(Boolean)
                                      .join(" ")}
                                      align="right">
                                        {
                                        Object.entries((PriorityOptions as any)[k][letter]).map( (v) => {
                                            return `${v.join(": ")}`
                                        }).join(", ")
                                        }
                                    </TableCell>
                                    )
                                }
                                return (
                                    <TableCell id={`${k}:${letter}`}
                                      className={
                                          [
                                            classes.priorityCell,
                                            (this.state as any)[k]?.value === (PriorityOptions as any)[k][letter] ? classes.selectedCell : false
                                          ].filter(Boolean)
                                          .join(" ")
                                        }
                                      onClick={() => this.selectPriority(k, letter)}
                                      align="right">
                                          {
                                          (PriorityOptions as any)[k][letter]
                                          }
                                    </TableCell>
                                )
                            })
                        }
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <Button icon disabled={this.isInvalid()} onClick={() => this.generatePriorities()}>
                    <Icon icon="minus-circle"></Icon>
                </Button>
            </TableContainer>
        )
    }
    
}

export default withStyles(useStyles)(NewPriorities);