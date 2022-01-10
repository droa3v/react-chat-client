import React from "react";
import styles from "./Menu.module.scss";
import { MenuContent } from "./menu_content/MenuContent";
import { Navigation } from "./navigation/Navigation";
import { UserCard } from "./user_card/UserCard";

export const Menu: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <UserCard />
      <Navigation />
      <MenuContent />
    </div>
  );
};
