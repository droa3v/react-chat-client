import React from "react";
import { Button } from "../../components/Button/Button";

export const ChatInput: React.FC = (): JSX.Element => {
  return (
    <div>
      <input
        type="text"
        name="MessageInput"
        placeholder="Type your message here..."
      />
      <Button>Submit</Button>
    </div>
  );
};
