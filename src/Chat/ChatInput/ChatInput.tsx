import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../../components/Button/Button";
import styles from "./ChatInput.module.scss";

export const ChatInput: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.innerwrapper}>
        <Button rounded className={styles.button}>
          <FontAwesomeIcon icon={faPlus} className={styles.icon} />
        </Button>
        <input
          type="text"
          name="MessageInput"
          placeholder="Type your message here..."
          className={styles.input}
        />
        <FontAwesomeIcon icon={faSmile} className={styles.emoji} />
        <Button rounded className={styles.button}>
          <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
        </Button>
      </div>
    </div>
  );
};
