import React from "react";
import { Messages } from "./Messages/Messages";
import { ChatInput } from "./ChatInput/ChatInput";
import styles from "./Chat.module.scss";
import { TopBar } from "./TopBar/TopBar";

export const Chat: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <TopBar />
        <Messages />
        <ChatInput />
      </div>
    </div>
  );
};
