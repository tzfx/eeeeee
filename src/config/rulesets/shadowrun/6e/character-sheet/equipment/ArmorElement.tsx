import React from "react";
import { TextField } from "@material-ui/core";

type Props = {
    name: string,
    rating: number,
    notes: string
};

class ArmorElement extends React.Component<Props, {}> {
    
    constructor(props: Props) {
        super(props);
    }
    
    render = () => {
        return (
            <TextField
                id="outlined-read-only-input"
                label={this.props.name}
                defaultValue={this.props.name}
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
          />
        );
    }
    
}

export default ArmorElement;