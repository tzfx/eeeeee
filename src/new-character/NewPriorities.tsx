import React, { CSSProperties } from "react";
import { PriorityList, PRIORITY_LETTERS, PRIORITY_TYPES, PriorityOptions, Letter } from "../config/rulesets/shadowrun/6e/PriorityOptions";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Theme, withStyles, Typography } from "@material-ui/core";


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
    prioritiesFinished: (_: PriorityList) => void
} & any;

type State = {
    Metatype: number,
    Attributes: number,
    Magic: any,
    Skills: number,
    Resources: number
};

class NewPriorities extends React.Component<Props, State> {
    
    constructor(props: any) {
        super(props);
    }
    
    selectPriority = (type: string, letter: Letter) => {
        const state = Object.assign({}, this.state) as any;
        switch(type) {
            case "Metatype":
            case "Attributes":
            case "Skills":
            case "Resources":
            case "Magic": state[type] = PriorityOptions[type][letter];
        }
        console.log(state);
        this.setState(state);
    }
    
    render() {
        const { classes } = this.props;
        return (
            <TableContainer component={Paper}>
                <Typography variant="h2">Select Priorities</Typography>
                <Table className={classes.priorityTable} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {PRIORITY_TYPES.map(k => (<TableCell align="right">{k}</TableCell>))}
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
                                        (this.state as any)?.[k] === (PriorityOptions as any)[k][letter] ? classes.selectedCell : false
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
                                            (this.state as any)?.[k] === (PriorityOptions as any)[k][letter] ? classes.selectedCell : false
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
            </TableContainer>
        )
    }
    
}

export default withStyles(useStyles)(NewPriorities);