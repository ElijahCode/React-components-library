import * as React from "react";

export class ColumnsComponent extends React.Component<
  { [key: string]: any; value?: number } | undefined,
  { value: number } | undefined
> {
  state = {
    value: this.props.value ? this.props.value : 0,
  };

  setCulumns() {
    const arr = [];
    for (let i = 0; i < this.state.value; i += 1) {
      arr.push(<div key={i} data-testid="column"></div>);
    }
    return arr;
  }

  render() {
    const columns = this.setCulumns();
    return (
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        data-testid="columnsBlock"
      >
        {columns}
      </div>
    );
  }
}
