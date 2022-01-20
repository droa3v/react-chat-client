import React from "react";
import { Avatar } from "../Avatar/Avatar";
import img from "../../img/image.jpeg";
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
    <div className={`${my ? styles.myContainer : styles.inContainer}`}>
      {my ? null : <Avatar src={img} size="md" />}
      <div className={`${my ? styles.myMessage : styles.inMessage}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};
