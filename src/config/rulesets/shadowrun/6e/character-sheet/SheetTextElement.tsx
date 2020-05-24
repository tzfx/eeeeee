import React from "react";
import { TextField } from "@material-ui/core";

type Props = {
  name: string;
  value: any;
};

class SheetTextElement extends React.Component<Props, {}> {
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
