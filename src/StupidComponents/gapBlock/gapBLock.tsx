import * as React from "react";

export class GapBlock extends React.Component<
  Record<string, unknown>,
  Record<string, unknown>
> {
  render(): React.ReactElement {
    return (
      <div style={{ height: "50px" }} data-testid="gapDiv">
        <hr data-testid="gapHorizontalLine" />
      </div>
    );
  }
}
