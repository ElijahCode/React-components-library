import { Story, Meta } from "@storybook/react";
import React from "react";
import { ColumnsComponent } from "./columnsComponent";

export default {
  title: "ColumnsComponent",
  component: ColumnsComponent,
} as Meta;

const Template: Story<ColumnsComponentProps> = (args) => (
  <ColumnsComponent {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  value: 2,
};
