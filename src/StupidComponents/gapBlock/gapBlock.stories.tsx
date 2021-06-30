import { Story, Meta } from "@storybook/react";
import React from "react";
import { GapBlock } from "./gapBLock";

export default {
  title: "GapBlock",
  component: GapBlock,
} as Meta;

const Template: Story<Record<string, unknown>> = () => <GapBlock />;

export const Primary = Template.bind({});
