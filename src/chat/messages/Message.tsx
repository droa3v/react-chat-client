import React from "react";
import styles from "./Message.module.scss";

interface MessageProps {
  my: boolean;
  children: React.ReactNode;
}

export const Message: React.FC<MessageProps> = ({
  my,
  children,
}): JSX.Element => {
  return (
    <div className={`${my ? styles.myMessage : styles.inMessage}`}>
      <div
        className={`${styles.textContainer} ${
          my ? styles.tailRight : styles.tailLeft
        }`}
      >
        <p>{children}</p>
      </div>
    </div>
  );
};
