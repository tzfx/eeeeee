import React from "react";
import { Attributes, AttributesBuilder, AttrName } from "../config/rulesets/shadowrun/6e/Attributes";
import { Metatype } from "../config/rulesets/shadowrun/6e/metatype/Metatype.interface";
import { AttributeRater } from "./AttributeRater";

import { State as PriorityState } from './NewPriorities';

type Props = {
    metatype: Metatype,
    priority: PriorityState,
    attributesFinished: (attrs: Attributes | undefined) => void
}

type State = {
    totalPoints: number;
    builder: AttributesBuilder
};

class NewAttributes extends React.Component<Props, State> {
    
    private attributeOptions: AttrName[] = [
        "body",
        "agility",
        "reaction",
        "strength",
        "willpower",
        "logic",
        "intuition",
        "charisma"
    ];
    
    private specialAttributeOptions: AttrName[] = [
        "edge",
        "magic"
    ];
    
    constructor(props: Props) {
        super(props);
        if (props.priority.Attributes != null && props.priority.Metatype != null) {
            let builder = new AttributesBuilder(props.metatype, props.priority.Attributes);
            builder = this.attributeOptions.map(option => builder.set(option, 1)).pop() as AttributesBuilder;
            builder = this.specialAttributeOptions.map(option => builder.set(option, 1)).pop() as AttributesBuilder;
            this.state = {
                builder,
                totalPoints: (props.priority.Attributes.value as number) + (props.priority.Metatype.value as number)
            };
        } else
            throw new Error("areiraj");
    }
    
    handleChanged = (attribute: AttrName, rating: number, delta: number) => {
        console.log(this.state, attribute, rating);
        this.setState({
            builder: this.state.builder.set(attribute, rating),
            totalPoints: this.state.totalPoints - delta
        });
        this.props.attributesFinished(this.state.builder.isReady() ? this.state.builder.build() : undefined)
    }
    
    render() {
        return (
        <div className="ui container">
            <h3>
                Total Points: {this.state.totalPoints}
            </h3>
            <h4>
                ( {this.props.priority.Attributes?.value} Attributes, {this.props.priority.Metatype?.value} Adjustment)
            </h4>
            {this.attributeOptions.map(option =>
                (
                <div key={option}>
                    <table className="ui fixed definition table">
                        <tbody>
                            <AttributeRater metatype={this.props.metatype} pointsAllowed={this.state.totalPoints} attributeName={option} changed={(attribute, rating, delta) => this.handleChanged(attribute, rating, delta)}></AttributeRater>
                        </tbody>
                    </table>
                </div>
                )
            )}
        </div>
        );
    }
}

export default NewAttributes;