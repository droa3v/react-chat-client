import React from "react";
import { Avatar } from "../../components/Avatar/Avatar";
import img from "../../img/image.jpeg";
import styles from "./UserCard.module.scss";

export const UserCard: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Avatar src={img} size="lg" />
      <h3 className={styles.name}>Jane Doe</h3>
    </div>
  );
};
