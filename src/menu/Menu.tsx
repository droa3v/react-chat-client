import React from "react";
import styles from "./Menu.module.scss";
import { UserCard } from "./user_card/UserCard";

export const Menu: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <UserCard />
    </div>
  );
};
