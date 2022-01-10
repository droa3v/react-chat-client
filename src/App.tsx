import React from "react";
import { Chat } from "./chat/Chat";
import "./scss/App.scss";

export const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Chat />
    </div>
  );
};
