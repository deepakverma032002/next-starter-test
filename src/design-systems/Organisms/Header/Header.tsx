import React from "react";
import { HeaderProps } from "./interface";
import { Input, Button } from "../../../design-systems/Atoms";
import { Typography } from "@/design-systems/Atoms/Typography";
export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="bg-gray-700 px-2 py-4 lg:px-8">
      <div className=" items-center justify-between gap-4 md:items-start md:gap-0 ">
        <div className="flex pt-0 ">
          <Input placeholder="Search" />
          <ul className="flex w-full items-center justify-center">
            <li className="font-Roboto text-caption whitespace-nowrap px-3 font-normal  text-gray-400">
              <Typography
                variant="regular"
                className="font-Roboto text-body text-neutral-100 dark:text-neutral-700 ml-1 hidden font-medium md:block"
              >
                Home
              </Typography>
            </li>
            <li className="font-Roboto text-caption leading-small dark:text-neutral-600 whitespace-nowrap px-3 font-normal  text-gray-400">
              <Typography
                variant="regular"
                className="font-Roboto ml-1 hidden font-medium md:block"
              >
                About Us
              </Typography>
            </li>
            <li className="font-Roboto text-caption leading-small whitespace-nowrap px-3 font-normal  text-gray-400">
              <Typography
                variant="regular"
                className="font-Roboto  ml-1 hidden font-medium md:block"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
          <Button
            label={"Connect"}
            className="w-44 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          />
        </div>
      </div>
    </div>
  );
};
