import * as React from "react";

export class ImageComponent extends React.Component<
  Record<string, unknown>,
  ImageComponentProps
> {
  static defaultProps = {
    textAlign: "none",
    imageSource: "",
  };

  textAlign: ImageComponentProps["align"] = this.props.align
    ? (this.props.align as ImageComponentProps["align"])
    : "none";

  imageSource: ImageComponentProps["source"] = this.props.source
    ? (this.props.source as string)
    : "";

  render(): JSX.Element {
    return (
      <img
        data-testid="image"
        src={this.imageSource}
        style={{ float: this.textAlign as "left" | "right" | "none" }}
      />
    );
  }
}
