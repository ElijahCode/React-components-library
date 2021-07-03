import { Story, Meta } from "@storybook/react";
import React from "react";
import { Header } from "./hComponent";

export default {
  title: "hComponent",
  component: Header,
} as Meta;

const Template: Story<HComponentProps> = (args) => <Header {...args} />;

export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const H5 = Template.bind({});
export const H6 = Template.bind({});

H1.args = {
  level: 1,
  text: "h1 element",
};

H2.args = {
  level: 2,
  text: "h1 element",
};

H3.args = {
  level: 3,
  text: "h1 element",
};

H4.args = {
  level: 4,
  text: "h1 element",
};

H5.args = {
  level: 5,
  text: "h1 element",
};

H6.args = {
  level: 6,
  text: "h1 element",
};
