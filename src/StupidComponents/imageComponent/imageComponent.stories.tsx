import { Story, Meta } from "@storybook/react";
import React from "react";
import { ImageComponent } from "./imageComponent";

export default {
  title: "ImageComponent",
  component: ImageComponent,
} as Meta;

const Template: Story<ImageComponentProps> = (args) => (
  <ImageComponent {...args} />
);

export const None = Template.bind({});
export const Left = Template.bind({});
export const Right = Template.bind({});

const imageSource =
  "https://forum.na-svyazi.ru/uploads/484/post-100170-1331484368_thumb.jpg";

None.args = {
  source: imageSource,
  align: "none",
};

Left.args = {
  source: imageSource,
  align: "left",
};

Right.args = {
  source: imageSource,
  align: "right",
};
