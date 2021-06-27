import * as React from "react";

export class TextParagraph extends React.Component {
  text: string;

  style: string;

  constructor(props: TextParagraphComponentProps) {
    super(props);
    this.text = props.text ? props.text : "Text";
    this.style = props.style ? props.style : "normal";
  }

  render() {
    switch (this.style) {
      case "bold":
        return <p style={{ fontWeight: "bold" }}>{this.text}</p>;
      case "normal":
        return <p style={{ fontStyle: "normal" }}>{this.text}</p>;
      case "cursive":
        return <p style={{ fontStyle: "italic" }}>{this.text}</p>;
      default:
        return <p>{this.text}</p>;
    }
  }
}
