import React from "react";
import { ChatInput } from "./chat_input/ChatInput";
import { Messages } from "./messages/Messages";
import styles from "./Chat.module.scss";

export const Chat: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Messages />
      <ChatInput />
    </div>
  );
};
