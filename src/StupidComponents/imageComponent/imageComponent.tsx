import * as React from "react";

export class ImageComponent extends React.Component<
  ImageComponentProps,
  Record<string, unknown>
> {
  static defaultProps = {
    name: "image component",
    align: "none",
    source: "",
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
