import React from "react";
import { Message } from "../../components/Message/Message";
import styles from "./Messages.module.scss";

export const Messages: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Message my={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Message>
      <Message my={false}>Lorem ipsum</Message>
      <Message my={true}>Lorem</Message>
      <Message my={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Integer tincidunt eleifend urna eu pellentesque. Pellentesque
        tempus a tellus condimentum posuere. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer tincidunt eleifend urna eu
        pellentesque. Pellentesque tempus a tellus condimentum posuere. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt
        eleifend urna eu pellentesque. Pellentesque tempus a tellus condimentum
        posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer tincidunt eleifend urna eu pellentesque. Pellentesque tempus a
        tellus condimentum posuere. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer tincidunt eleifend urna eu pellentesque.
        Pellentesque tempus a tellus condimentum posuere.
      </Message>
      <Message my={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Integer tincidunt eleifend urna eu pellentesque. Pellentesque
        tempus a tellus condimentum posuere. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer tincidunt eleifend urna eu
        pellentesque. Pellentesque tempus a tellus condimentum posuere. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt
        eleifend urna eu pellentesque. Pellentesque tempus a tellus condimentum
        posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer tincidunt eleifend urna eu pellentesque. Pellentesque tempus a
        tellus condimentum posuere. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer tincidunt eleifend urna eu pellentesque.
        Pellentesque tempus a tellus condimentum posuere.
      </Message>
      <Message my={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Integer tincidunt eleifend urna eu pellentesque. Pellentesque
        tempus a tellus condimentum posuere. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer tincidunt eleifend urna eu
        pellentesque. Pellentesque tempus a tellus condimentum posuere. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt
        eleifend urna eu pellentesque. Pellentesque tempus a tellus condimentum
        posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer tincidunt eleifend urna eu pellentesque. Pellentesque tempus a
        tellus condimentum posuere. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer tincidunt eleifend urna eu pellentesque.
        Pellentesque tempus a tellus condimentum posuere.
      </Message>
      <Message my={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Message>
      <Message my={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt eleifend urna eu pellentesque. Pellentesque tempus a tellus
        condimentum posuere.
      </Message>
    </div>
  );
};
