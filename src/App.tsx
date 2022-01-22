import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Chat } from "./Chat/Chat";
import { Menu } from "./Menu/Menu";
import "./scss/App.scss";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <Menu />
        <Chat />
      </div>
    </BrowserRouter>
  );
};
