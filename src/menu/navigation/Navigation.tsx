import React from "react";
import { Button } from "../../components/Button/Button";
import styles from "./Navigation.module.scss";

export const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Button>Contacts</Button>
      <Button>Friends</Button>
      <Button>Rooms</Button>
    </div>
  );
};
