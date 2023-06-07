import React from "react";
import { ButtonProps } from "./interface";

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center gap-4
  overflow-hidden rounded-full
   bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      {...props}
    >
      {label}
    </button>
  );
};
