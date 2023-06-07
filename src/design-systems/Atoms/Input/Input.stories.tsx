import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    label: {
      control: "text",
      defaultValue: "FormInput",
    },
    placeholder: {
      control: "text",
      defaultValue: "Search",
    },

    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextSearch = Template.bind({});
TextSearch.args = {
  label: "Search",
  placeholder: "Seacrh Nfts ...",
};
