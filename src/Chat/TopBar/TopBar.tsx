import { faEllipsisV, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Avatar } from "../../components/Avatar/Avatar";
import { Button } from "../../components/Button/Button";
import styles from "./TopBar.module.scss";
import img from "../../img/image.jpeg";

export const TopBar: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <Avatar src={img} size="md" />
        <div>
          <span className={styles.name}>Jane Doe</span> <br />
          <span className={styles.online}>last seen 5 minutes ago...</span>
        </div>
      </div>

      <div className={styles.buttonsWrapper}>
        <Button rounded secondary className={styles.button}>
          <FontAwesomeIcon icon={faPaperclip} className={styles.icon} />
        </Button>
        <Button rounded secondary className={styles.button}>
          <FontAwesomeIcon icon={faEllipsisV} className={styles.icon} />
        </Button>
      </div>
    </div>
  );
};
