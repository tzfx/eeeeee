import React from "react";
import { Letter, MagicPriorities, PriorityOptions, PRIORITY_LETTERS, PRIORITY_TYPES } from "../config/rulesets/shadowrun/6e/PriorityOptions";


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
    
    isInvalid = (): boolean => {
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
        this.setState(state, () => this.props.prioritiesFinished(this.isInvalid() ? undefined : this.state));
    }
    
    render() {
        return (
            <div className="ui container">
                <table className="ui definition celled table">
                    <thead>
                        <tr>
                            <th>Priority</th>
                            {PRIORITY_TYPES.map(k => (<th key={k}>{k}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                    {PRIORITY_LETTERS.map((letter) => (
                        <tr key={letter}>
                            <td>
                                {letter}
                            </td>
                            {
                                PRIORITY_TYPES.map(k => {
                                    if (k === "Magic") {
                                        return (
                                        <td
                                        id={`${k}:${letter}`}
                                        key={`${k}:${letter}`}
                                        onClick={() => this.selectPriority(k, letter)}
                                        className={(this.state as any)[k]?.value === (PriorityOptions as any)[k][letter] ? "positive" : ""}
                                        align="right">
                                            {
                                            Object.entries((PriorityOptions as any)[k][letter]).map( (v) => {
                                                return `${v.join(": ")}`
                                            }).join(", ")
                                            }
                                        </td>
                                        )
                                    }
                                    return (
                                        <td
                                        id={`${k}:${letter}`}
                                        key={`${k}:${letter}`}
                                        className={(this.state as any)[k]?.value === (PriorityOptions as any)[k][letter] ? "positive" : ""}
                                        onClick={() => this.selectPriority(k, letter)}
                                        align="right">
                                            {
                                            (PriorityOptions as any)[k][letter]
                                            }
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
    
}

export default NewPriorities;