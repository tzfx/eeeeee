import React from "react";
import { PriorityList, PRIORITY_LETTERS, PRIORITY_TYPES, PriorityOptions } from "../config/rulesets/shadowrun/6e/PriorityOptions";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

type Props = {
    prioritiesFinished: (_: PriorityList) => void
}

type State = {
    meta: number,
    attr: number,
    magic: number,
    skill: number,
    resource: number
};

class NewPriorities extends React.Component<Props, State> {
    
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
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
                        {PRIORITY_TYPES.map(k => (<TableCell align="right">{Object.keys((PriorityOptions as any)[k][letter])}</TableCell>))}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
    
}

export default NewPriorities;