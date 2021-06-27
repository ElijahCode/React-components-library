import * as React from "react";

export class ImageComponent extends React.Component {
  textAlign: ImageComponentProps["align"];

  imageSource: ImageComponentProps["source"];

  constructor(props: ImageComponentProps) {
    super(props);

    this.textAlign = props.align ? props.align : "none";
    this.imageSource = props.source ? props.source : "";
  }

  render() {
    return (
      <img
        data-testid="image"
        src={this.imageSource}
        style={{ float: this.textAlign as "left" | "right" | "none" }}
      />
    );
  }
}
