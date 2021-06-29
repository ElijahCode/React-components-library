import * as React from "react";

export class CollapsingList extends React.Component<
  CollapseListComponentProps | undefined,
  CollapseListComponentState
> {
  headText: string = this.props ? (this.props.headerText as string) : "List";

  list: string[] = this.props ? (this.props.list as string[]) : [];

  state = {
    buttonState: false,
  };

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