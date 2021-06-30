import { Story, Meta } from "@storybook/react";
import React from "react";
import { TextParagraph } from "./textParagraph";

export default {
  title: "TextParagraph",
  component: TextParagraph,
} as Meta;

const Template: Story<TextParagraphComponentProps> = (args) => (
  <TextParagraph {...args} />
);

export const Normal = Template.bind({});
export const Bold = Template.bind({});
export const Cursive = Template.bind({});

Normal.args = {
  style: "normal",
  text: "Test text",
};

Bold.args = {
  style: "bold",
  text: "Test text",
};

Cursive.args = {
  style: "cursive",
  text: "Test text",
};
