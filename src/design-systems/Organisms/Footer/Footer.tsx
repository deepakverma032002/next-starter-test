import { Typography } from "@/design-systems/Atoms/Typography";
import React from "react";

import { FooterProps } from "./interface";

export const Footer: React.FC<FooterProps> = ({ className = "", children }) => {
  return (
    <footer className="bg-black px-2 py-4 lg:px-8">
      <div className=" items-center justify-between gap-4 md:items-start md:gap-0 ">
        <div className="flex pt-0 ">
          <ul className="flex w-full justify-end sm:justify-center">
            <li className="font-Roboto text-caption whitespace-nowrap px-3 font-normal  text-gray-400">
              <Typography
                variant="regular"
                className="font-Roboto ml-1 hidden font-medium md:block"
              >
                Contact Us
              </Typography>
            </li>
            <li className="font-Roboto text-caption whitespace-nowrap px-3 font-normal  text-gray-400">
              <Typography
                variant="regular"
                className="font-Roboto ml-1 hidden font-medium md:block"
              >
                Docs
              </Typography>
            </li>
            <li className="font-Roboto text-caption whitespace-nowrap px-3 font-normal  text-gray-400">
              <Typography
                variant="regular"
                className="font-Roboto ml-1 hidden font-medium md:block"
              >
                Terms
              </Typography>
            </li>
            <li className="font-Roboto text-caption whitespace-nowrap px-3 font-normal  text-gray-400">
              <Typography
                variant="regular"
                className="font-Roboto  ml-1 hidden font-medium md:block"
              >
                Privacy
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
