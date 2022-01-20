import React from "react";
import { Chat } from "./Chat/Chat";
import { Menu } from "./Menu/Menu";
import "./scss/App.scss";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="appContainer">
      <Menu />
      <Chat />
    </div>
  );
};
