import React from "react";
import { Chat } from "./chat/Chat";
import { Menu } from "./menu/Menu";
import "./scss/App.scss";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="appContainer">
      <Menu />
      <Chat />
    </div>
  );
};
