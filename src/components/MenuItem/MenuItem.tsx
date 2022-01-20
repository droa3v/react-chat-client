import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "./MenuItem.module.scss";

interface MenuItemProps {
  icon: IconDefinition;
  children: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  children,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      {children}
    </div>
  );
};
