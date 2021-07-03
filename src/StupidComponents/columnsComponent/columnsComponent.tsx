import * as React from "react";

export class ColumnsComponent extends React.Component<
  { value?: number } | undefined,
  { value: number }
> {
  state = {
    value: this.props.value ? this.props.value : 0,
  };

  setCulumns(): JSX.Element[] {
    const arr = [];
    for (let i = 0; i < this.state.value; i += 1) {
      arr.push(
        <div key={i} data-testid="column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum
            arcu nisl, in congue elit interdum ac. Quisque sed nunc varius,
            gravida nibh in, finibus libero. Curabitur a lectus dolor.
            Vestibulum hendrerit augue rhoncus, luctus turpis sed, viverra est.
            Pellentesque eu lacinia orci. Praesent vel odio ullamcorper, maximus
            lectus eu, eleifend magna. Nulla mattis porta rhoncus. Sed non arcu
            risus. Morbi condimentum elit lorem, at condimentum urna maximus
            scelerisque. Fusce porta dolor eu risus tincidunt, non egestas
            turpis bibendum.
          </p>
        </div>
      );
    }
    return arr;
  }

  render(): JSX.Element {
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
