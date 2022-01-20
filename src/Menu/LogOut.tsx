import React from "react";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "../components/MenuItem/MenuItem";

export const LogOut: React.FC = (): JSX.Element => {
  return (
    <div>
      <MenuItem icon={faDoorOpen}>Log out</MenuItem>
    </div>
  );
};
