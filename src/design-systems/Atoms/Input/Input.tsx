import React, { useRef } from "react";
import { InputProps } from "./interface";
import { SearchIcon } from "../Icons";

export const Input: React.FC<InputProps> = ({
  label = "",
  className = "",
  placeholder = "",
}) => {
  return (
    <label
      tabIndex={0}
      className={`focus:outline-none flex w-2/4 rounded-full border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:ring focus:ring-purple-300 focus:ring-opacity-40`}
    >
      <input className="outline-none flex-1" placeholder={placeholder} />
      <SearchIcon className="relative" />
    </label>
  );
};
