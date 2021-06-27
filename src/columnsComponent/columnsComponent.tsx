import * as React from "react";

export class ColumnsComponent extends React.Component<
  { [key: string]: any; value: number } | undefined,
  { value: number } | undefined
> {
  state = {
    value: this.props ? this.props.value : 0,
  };

  setCulumns() {
    const arr = [];
    for (let i = 0; i < this.state.value; i += 1) {
      arr.push(<div key={i} data-testid="column"></div>);
    }
    return arr;
  }

  render() {
    return (
      <div data-testid="columnsBlock">{this.setCulumns().map((el) => el)}</div>
    );
  }
}
