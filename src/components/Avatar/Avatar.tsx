import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
  size: "lg" | "md" | "sm";
}

export const Avatar: React.FC<AvatarProps> = ({ src, size }): JSX.Element => {
  return (
    <React.Fragment>
      <img src={src} className={styles[size]} />
    </React.Fragment>
  );
};
