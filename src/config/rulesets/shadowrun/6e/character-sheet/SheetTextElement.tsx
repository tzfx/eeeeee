import React from "react";
import { TextField } from "@material-ui/core";

type Props = {
  name: string;
  value: any;
};

type State = Record<string, unknown>;

class SheetTextElement extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render = () => {
    return (
      <TextField
        id="outlined-read-only-input"
        label={this.props.name}
        defaultValue={this.props.value}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
    );
  };
}

export default SheetTextElement;
