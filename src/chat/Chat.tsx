import React from "react";
import { ChatInput } from "./chat_input/ChatInput";
import { Messages } from "./messages/Messages";

export const Chat: React.FC = (): JSX.Element => {
  return (
    <div>
      <Messages />
      <ChatInput />
    </div>
  );
};
