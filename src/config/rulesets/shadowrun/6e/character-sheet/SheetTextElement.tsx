import React from "react";
import { Label } from "semantic-ui-react";

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
      <Label size="large" basic>
        {this.props.name}
        <Label.Detail>{this.props.value}</Label.Detail>
      </Label>
    );
  };
}

export default SheetTextElement;
