import React from "react";
import { WalletConnectProps } from "./interface";
import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { Button } from "@/design-systems/Atoms";

export const WalletConnect: React.FC<WalletConnectProps> = ({}) => {
  return (
    <div className="flex justify-between gap-4 md:items-center">
      <Button
        className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        label={"Connect Metamask Wallet"}
      />
      <Button
        className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        label={"Connect Kaikas Wallet"}
      />
    </div>
  );
};
