import { Story, Meta } from "@storybook/react";
import React from "react";
import { HOCTesterComponent } from "./HOCTesterComponent";

export default {
  title: "HOCTesterComponent",
  component: HOCTesterComponent,
} as Meta;

const Template: Story<CollapseListComponentProps> = () => (
  <HOCTesterComponent />
);

export const Primary = Template.bind({});
