import { Story, Meta } from "@storybook/react";
import React from "react";
import { CollapsingList } from "./collapsingList";

export default {
  title: "CollapsingList",
  component: CollapsingList,
} as Meta;

const Template: Story<CollapseListComponentProps> = (args) => (
  <CollapsingList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  headerText: "Test list",
  list: ["item1", "item2", "item3"],
};
