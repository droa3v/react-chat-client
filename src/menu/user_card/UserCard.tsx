import React from "react";
import img from "../../img/image.jpeg";
import styles from "./UserCard.module.scss";

export const UserCard: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.avatar} />
      <h3 className={styles.name}>Jane Doe</h3>
      <p className={styles.email}>janedoe@gmail.com</p>
    </div>
  );
};
