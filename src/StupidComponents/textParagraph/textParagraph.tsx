import * as React from "react";

export class TextParagraph extends React.Component<
  Record<string, unknown>,
  TextParagraphComponentProps
> {
  text: string = this.props.text ? (this.props.text as string) : "Text";

  style: string = this.props.style ? (this.props.style as string) : "normal";

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
