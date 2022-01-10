import React from "react";
import { Button } from "../../components/Button/Button";
import styles from "./ChatInput.module.scss";

export const ChatInput: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        name="MessageInput"
        placeholder="Type your message here..."
        className={styles.input}
      />
      <Button>Submit</Button>
    </div>
  );
};
