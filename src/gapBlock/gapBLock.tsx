import * as React from "react";

export class GapBlock extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render(): React.ReactElement {
    return (
      <div style={{ height: "50px" }} data-testid="gapDiv">
        <hr data-testid="gapHorizontalLine" />
      </div>
    );
  }
}
