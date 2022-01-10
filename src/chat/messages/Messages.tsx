import React from "react";
import { Message } from "./Message";
import styles from "./Messages.module.scss";

export const Messages: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Message my={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere.
      </Message>
      <Message my={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere.
      </Message>
      <Message my={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere.
      </Message>
      <Message my={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere.
      </Message>
      <Message my={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere.
      </Message>
      <Message my={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere.
      </Message>
    </div>
  );
};
