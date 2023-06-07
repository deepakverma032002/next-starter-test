import { ComponentStory, ComponentMeta } from "@storybook/react";
import type { ComponentType } from "react";
import React from "react";

import { SearchIcon } from "./Icon";
import { CheckIconProps, IconProps } from "./interface";

export default {
  title: "Atoms/Icons",
  argTypes: {
    className: {
      defaultValue: "w-8 h-8",
      table: {
        disabled: true,
      },
    },
  },
} as ComponentMeta<typeof SearchIcon>;

interface ComponentProps extends IconProps, CheckIconProps {
  Icon: ComponentType<IconProps | CheckIconProps>;
}

const Template: ComponentStory<React.FC<ComponentProps>> = ({
  Icon,
  ...iconProps
}) => <Icon width={32} height={32} {...iconProps} />;

export const Search = Template.bind({});
Search.args = {
  Icon: SearchIcon,
  className: "fill-neutral-100 dark:fill-neutral-800",
};
