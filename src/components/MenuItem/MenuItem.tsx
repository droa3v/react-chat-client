import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "./MenuItem.module.scss";
import { Link } from "react-router-dom";

interface MenuItemProps {
  icon: IconDefinition;
  children: React.ReactNode;
  to: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  children,
  to,
}): JSX.Element => {
  return (
    <>
      <li className={styles.container}>
        <Link to={to} className={styles.link}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
          {children}
        </Link>
      </li>
    </>
  );
};
