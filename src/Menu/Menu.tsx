import React from "react";
import { LogOut } from "./LogOut";
import styles from "./Menu.module.scss";
import { Navigation } from "./Navigation/Navigation";

import { UserCard } from "./UserCard/UserCard";

export const Menu: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <UserCard />
        <Navigation />
        <LogOut />
      </div>
    </div>
  );
};
