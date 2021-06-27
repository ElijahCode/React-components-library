import * as React from "react";

export class Header extends React.Component {
  level: number;

  text: string;

  constructor(props: HComponentProps) {
    super(props);
    this.level = props.level ? props.level : 1;
    this.text = props.text ? props.text : "Text";
  }

  render() {
    switch (this.level) {
      case 1:
        return <h1 data-testid="h1">{this.text}</h1>;
      case 2:
        return <h2 data-testid="h2">{this.text}</h2>;
      case 3:
        return <h3 data-testid="h3">{this.text}</h3>;
      case 4:
        return <h4 data-testid="h4">{this.text}</h4>;
      case 5:
        return <h5 data-testid="h5">{this.text}</h5>;
      case 6:
        return <h6 data-testid="h6">{this.text}</h6>;
      default:
        return <h1 data-testid="h1">{this.text}</h1>;
    }
  }
}
