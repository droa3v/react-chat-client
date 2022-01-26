import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Chat } from "./Chat/Chat";
import { Menu } from "./Menu/Menu";
import { Register } from "./Pages/Auth/Register";
import "./scss/App.scss";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <Menu />
        <Register />
        <Chat />
      </div>
    </BrowserRouter>
  );
};
