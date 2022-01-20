import React from "react";
import {
  faAddressBook,
  faCog,
  faCommentDots,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navigation.module.scss";
import { MenuItem } from "../../components/MenuItem/MenuItem";

export const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <MenuItem icon={faCommentDots}>Chat</MenuItem>
      <MenuItem icon={faAddressBook}>Contacts</MenuItem>
      <MenuItem icon={faComments}>Rooms</MenuItem>
      <MenuItem icon={faUser}>Friends</MenuItem>
      <MenuItem icon={faCog}>Settings</MenuItem>
    </div>
  );
};
