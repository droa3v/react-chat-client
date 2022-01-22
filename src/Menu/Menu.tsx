import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDown,
  faPowerOff,
  faSlidersH,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressBook,
  faCommentDots,
  faComments,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

import { Avatar } from "../components/Avatar/Avatar";
import { MenuItem } from "../components/MenuItem/MenuItem";
import styles from "./Menu.module.scss";
import img from "../img/image.jpeg";

export const Menu: React.FC = (): JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <>
      <nav className={`${styles.container} ${clicked ? styles.active : null}`}>
        <FontAwesomeIcon
          onClick={handleClick}
          icon={faTimes}
          className={styles.icon}
        />

        <div className={styles.userCard}>
          <Avatar src={img} size="lg" />
          <div>
            <span className={styles.name}>Jane Doe</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>

        <ul className={styles.navigation}>
          <MenuItem icon={faCommentDots} to="/chat">
            Chat
          </MenuItem>
          <MenuItem icon={faAddressBook} to="/contacts">
            Contacts
          </MenuItem>
          <MenuItem icon={faComments} to="/rooms">
            Rooms
          </MenuItem>
          <MenuItem icon={faUser} to="/friends">
            Friends
          </MenuItem>
          <MenuItem icon={faSlidersH} to="/settings">
            Settings
          </MenuItem>
        </ul>

        <ul className={styles.logOut}>
          <MenuItem icon={faPowerOff} to="/logout">
            Log out
          </MenuItem>
        </ul>
      </nav>

      {clicked && <div className={styles.darkBackground}></div>}
      <FontAwesomeIcon
        onClick={handleClick}
        icon={faAngleDoubleRight}
        className={styles.icon}
      />
    </>
  );
};
