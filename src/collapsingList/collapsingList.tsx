import * as React from "react";

export class CollapsingList extends React.Component {
  headText: string;

  list: string[];

  state = {
    buttonState: false,
  };

  constructor(props: CollapseListComponentProps) {
    super(props);
    this.headText = props.headerText ? props.headerText : "List";
    this.list = props.list ? props.list : [];
  }

  click = () => {
    this.setState({
      buttonState: this.state.buttonState !== true,
    });
  };

  render() {
    if (!this.state.buttonState) {
      return (
        <>
          <h1>{this.headText}</h1>
          <button onClick={this.click}>Show list</button>
        </>
      );
    }
    return (
      <>
        <h1>{this.headText}</h1>
        <button onClick={this.click}>Collapse list</button>
        <ol data-testid="ListOfItems">
          {this.list.map((item, index) => (
            <li key={index.toString()} data-testid="Item">
              {item}
            </li>
          ))}
        </ol>
      </>
    );
  }
}
