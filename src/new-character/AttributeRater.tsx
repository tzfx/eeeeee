import React from "react";
import { Button, Rating } from "semantic-ui-react";
import { AttrName } from "../config/rulesets/shadowrun/6e/Attributes";
import { Metatype } from "../config/rulesets/shadowrun/6e/metatype/Metatype.interface";

type Props = {
    attributeName: AttrName,
    metatype: Metatype,
    pointsAllowed: number,
    changed: (attribute: AttrName, rating: number, delta: number) => void
}

type State = {
    min: number;
    max: number;
    rating: number;
}
export class AttributeRater extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        const max = 
        props.attributeName === "edge" ?
            props.metatype.maxEdge :
            (props.metatype.maxAttributes as any)[props.attributeName];
        this.state = {
            rating: 1,
            min: 1,
            max: max ?? 6 // Default for magic.
        }
    }
    
    private handleDown = () => {
        this.setState({ rating: this.state.rating - 1 },
            () => {
                this.props.changed(this.props.attributeName, this.state.rating, -1);
            });

    }
    
    private handleUp = () => {
        this.setState({ rating: this.state.rating + 1},
            () => {
                this.props.changed(this.props.attributeName, this.state.rating, 1);
            });
    }
    
    render() {
        return (
            <tr>
                <td className="right aligned">
                    {this.props.attributeName}
                </td>
                <td className="right aligned">
                    <Button icon disabled={this.state.rating === 1} onClick={this.handleDown}>
                    <i className="minus square outline icon"></i>
                    </Button>
                </td>
                <td className="left aligned">
                    <Rating disabled rating={this.state.rating} minrating={1} maxRating={this.state.max} />
                </td>
                <td className="left aligned">
                    <Button icon disabled={this.state.rating === this.state.max || this.props.pointsAllowed === 0} onClick={this.handleUp}>
                        <i className="plus square outline icon"></i>
                    </Button>
                </td>
            </tr>
        )
    }
}
